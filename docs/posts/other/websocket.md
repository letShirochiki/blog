---
date: 2024-06-26
author: letshirochi
category:
  - WebSocket
tag:
  - other
  - websocket
type: other
excerpt: <b>webscokect example.</b>
---

# WebScoket

## basic example

``` js title="vite.config.js"
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", function (event) {
  socket.send("Hello Server!");
});

// Listen for messages
socket.addEventListener("message", function (event) {
  console.log("Message from server ", event.data);
});
```

## method
### close()

`WebSocket.close();`

- params:

  - code
    - type: `'number'`
    - default: `'1005。'`
    - describe: `一个数字状态码，它解释了连接关闭的原因。如果没有传这个参数，默认使用 1005。`
  - reason
    - type: `string`
    - default: `''`
    - describe: `一个人类可读的字符串，它解释了连接关闭的原因。这个 UTF-8 编码的字符串不能超过 123 个字节。`

## events

### close
``` js title="onclose"
WebSocket.onclose = function(event) {
  console.log("WebSocket is closed now.");
};
```
### error
``` js title="onclose"
// Create WebSocket connection
// 创建一个 WebSocket 连接
const socket = new WebSocket("ws://localhost:8080");

// Listen for possible errors
// 监听可能发生的错误
socket.addEventListener("error", function (event) {
  console.log("WebSocket error: ", event);
});
```
### message
``` js title="onclose"
// 创建一个 WebSocket 连接
const socket = new WebSocket("ws://localhost:8080");

// 监听消息
socket.addEventListener("message", function (event) {
  console.log("Message from server ", event.data);
});
```
### open
``` js title="onopen"
WebSocket.onopen = function(event) {
  console.log("WebSocket is open now.");
};
```
::: tip
以上事件同理可以使用事件委托的写法 比如:

```js title="onopen"
socket.addEventListener("open", function (event) {
  socket.send("Hello Server!");
});
```
:::

## advanced

### 高并发渲染优化

- [多个数据webSocket推送太快导致前端渲染卡顿问题优化](https://blog.csdn.net/weixin_42627850/article/details/128964300)

``` js title="example"
data() {
  return {
    tempDataWsList: [], // 存放临时ws数据数组
    list: [], // 页面上的列表
    listCopy: [], // 深拷贝的初始化列表数据，用于统一渲染
  }
}
methods: {
  ...
  // websocket接收数据的方法
  onMessage(data) {
    if (data.data) {
      // 将Json字符串转译
      const dataWs = JSON.parse(data.data);
      // 将转译后的数据推入临时ws数据数组中
      this.tempDataWsList.push(dataWs);
      // 有ws数据就关闭定时器
      clearTimeout(this.wsTimeout);
      // 做缓存渲染,将ws接收到的数据放到数组，满10个就统一渲染
      if (this.tempDataWsList.length == 10) {
        this.handleList();
      } else {
        // 如果最后一个接收后1秒钟内不能满足10个，则直接渲染
        this.wsTimeout = setTimeout(() => {
          this.handleList();
        }, 1000);
      }
    }
  },

  // 操作数据渲染
  handleList() {
    // 循环临时ws数据数组
    this.tempDataWsList.forEach(temp => {
      // 循环深拷贝的初始化列表数据
      this.listCopy.forEach(item => {
        // 循环判断列表对应ws数据id，修改深拷贝列表上的值
        item.pointDetails.forEach(item1 => {
          if (item1.id == temp.detailsId) {
            item1.value = temp.realVal;
          }
        });
      });
    });
    // 清空临时ws数据数组
    this.tempDataWsList = [];
    // 将修改的列表数据赋值给页面渲染
    this.list = this.listCopy;
  }
}
```
- 避免频繁的 DOM 操作：减少对 DOM 的频繁修改，因为这会导致页面重新布局和渲染。考虑使用虚拟列表或虚拟滚动来优化大型列表的渲染2。
- 异步加载和懒加载：将不必要的 JavaScript 延迟加载，以避免阻塞页面渲染。对于图片和其他资源，只在用户滚动到它们附近时加载，而不是一开始就加载所有内容3。
- 使用 Web Workers：将一些计算密集型任务放在 Web Workers 中，以避免阻塞主线程，从而提高页面渲染性能。

### 断开重连
``` js
let ws;
 
function setupWebSocket() {
    ws = new WebSocket('ws://your-websocket-url');
 
    ws.onopen = function(event) {
        console.log('WebSocket connected');
    };
 
    ws.onclose = function(event) {
        console.log('WebSocket disconnected');
        // 在这里重新连接
        setTimeout(setupWebSocket, 1000); // 1秒后尝试重新连接
    };
 
    ws.onerror = function(error) {
        console.error('WebSocket error observed:', error);
    };
 
    ws.onmessage = function(event) {
        console.log('Message from server:', event.data);
    };
}
 
// 初始化WebSocket连接
setupWebSocket();
```

自动断开重连 心跳机制
``` js
function setupWebSocket(url) {
    let ws = null;
    let timeout = 2000; // 重连间隔
    let interval = 1000; // 心跳间隔
    let reconnect = true; // 是否重连
 
    function startHeartbeat() {
        // 心跳检测逻辑
        setTimeout(function() {
            if(ws && ws.readyState === 1) {
                // 发送心跳消息
                ws.send('heartbeat');
                startHeartbeat();
            } else {
                reconnect = true;
                connect();
            }
        }, interval);
    }
 
    function connect() {
        ws = new WebSocket(url);
 
        ws.onopen = function() {
            console.log('WebSocket connected');
            startHeartbeat();
        };
 
        ws.onclose = function() {
            console.log('WebSocket disconnected');
            if(reconnect) {
                setTimeout(connect, timeout);
            }
        };
 
        ws.onerror = function(error) {
            console.error('WebSocket error observed:', error);
        };
 
        ws.onmessage = function(event) {
            // 处理消息逻辑
            console.log('Message from server:', event.data);
        };
    }
 
    connect(); // 初始连接
}
 
// 使用示例
setupWebSocket('wss://your-websocket-server.com');
```