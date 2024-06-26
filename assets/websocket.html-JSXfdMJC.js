import{_ as n,c as s,o as a,a as e}from"./app-DlUA_kLB.js";const p={},t=e(`<h1 id="webscoket" tabindex="-1"><a class="header-anchor" href="#webscoket"><span>WebScoket</span></a></h1><h2 id="basic-example" tabindex="-1"><a class="header-anchor" href="#basic-example"><span>basic example</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="vite.config.js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// Create WebSocket connection.</span></span>
<span class="line"><span class="token keyword">const</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&quot;ws://localhost:8080&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Connection opened</span></span>
<span class="line">socket<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Server!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Listen for messages</span></span>
<span class="line">socket<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Message from server &quot;</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="method" tabindex="-1"><a class="header-anchor" href="#method"><span>method</span></a></h2><h3 id="close" tabindex="-1"><a class="header-anchor" href="#close"><span>close()</span></a></h3><p><code>WebSocket.close();</code></p><ul><li><p>params:</p><ul><li>code <ul><li>type: <code>&#39;number&#39;</code></li><li>default: <code>&#39;1005。&#39;</code></li><li>describe: <code>一个数字状态码，它解释了连接关闭的原因。如果没有传这个参数，默认使用 1005。</code></li></ul></li><li>reason <ul><li>type: <code>string</code></li><li>default: <code>&#39;&#39;</code></li><li>describe: <code>一个人类可读的字符串，它解释了连接关闭的原因。这个 UTF-8 编码的字符串不能超过 123 个字节。</code></li></ul></li></ul></li></ul><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>events</span></a></h2><h3 id="close-1" tabindex="-1"><a class="header-anchor" href="#close-1"><span>close</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="onclose"><pre class="language-javascript"><code><span class="line">WebSocket<span class="token punctuation">.</span><span class="token function-variable function">onclose</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket is closed now.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>error</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="onclose"><pre class="language-javascript"><code><span class="line"><span class="token comment">// Create WebSocket connection</span></span>
<span class="line"><span class="token comment">// 创建一个 WebSocket 连接</span></span>
<span class="line"><span class="token keyword">const</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&quot;ws://localhost:8080&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Listen for possible errors</span></span>
<span class="line"><span class="token comment">// 监听可能发生的错误</span></span>
<span class="line">socket<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket error: &quot;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="message" tabindex="-1"><a class="header-anchor" href="#message"><span>message</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="onclose"><pre class="language-javascript"><code><span class="line"><span class="token comment">// 创建一个 WebSocket 连接</span></span>
<span class="line"><span class="token keyword">const</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&quot;ws://localhost:8080&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 监听消息</span></span>
<span class="line">socket<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Message from server &quot;</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="open" tabindex="-1"><a class="header-anchor" href="#open"><span>open</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="onopen"><pre class="language-javascript"><code><span class="line">WebSocket<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket is open now.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>以上事件同理可以使用事件委托的写法 比如:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="onopen"><pre class="language-javascript"><code><span class="line">socket<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Server!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced"><span>advanced</span></a></h2><h3 id="高并发渲染优化" tabindex="-1"><a class="header-anchor" href="#高并发渲染优化"><span>高并发渲染优化</span></a></h3><ul><li><a href="https://blog.csdn.net/weixin_42627850/article/details/128964300" target="_blank" rel="noopener noreferrer">多个数据webSocket推送太快导致前端渲染卡顿问题优化</a></li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="example"><pre class="language-javascript"><code><span class="line"><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">tempDataWsList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 存放临时ws数据数组</span></span>
<span class="line">    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 页面上的列表</span></span>
<span class="line">    <span class="token literal-property property">listCopy</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 深拷贝的初始化列表数据，用于统一渲染</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line">  <span class="token comment">// websocket接收数据的方法</span></span>
<span class="line">  <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 将Json字符串转译</span></span>
<span class="line">      <span class="token keyword">const</span> dataWs <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 将转译后的数据推入临时ws数据数组中</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>tempDataWsList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dataWs<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 有ws数据就关闭定时器</span></span>
<span class="line">      <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>wsTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 做缓存渲染,将ws接收到的数据放到数组，满10个就统一渲染</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tempDataWsList<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 如果最后一个接收后1秒钟内不能满足10个，则直接渲染</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>wsTimeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 操作数据渲染</span></span>
<span class="line">  <span class="token function">handleList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 循环临时ws数据数组</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>tempDataWsList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">temp</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 循环深拷贝的初始化列表数据</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>listCopy<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 循环判断列表对应ws数据id，修改深拷贝列表上的值</span></span>
<span class="line">        item<span class="token punctuation">.</span>pointDetails<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item1</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>item1<span class="token punctuation">.</span>id <span class="token operator">==</span> temp<span class="token punctuation">.</span>detailsId<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            item1<span class="token punctuation">.</span>value <span class="token operator">=</span> temp<span class="token punctuation">.</span>realVal<span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 清空临时ws数据数组</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>tempDataWsList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 将修改的列表数据赋值给页面渲染</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listCopy<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>避免频繁的 DOM 操作：减少对 DOM 的频繁修改，因为这会导致页面重新布局和渲染。考虑使用虚拟列表或虚拟滚动来优化大型列表的渲染2。</li><li>异步加载和懒加载：将不必要的 JavaScript 延迟加载，以避免阻塞页面渲染。对于图片和其他资源，只在用户滚动到它们附近时加载，而不是一开始就加载所有内容3。</li><li>使用 Web Workers：将一些计算密集型任务放在 Web Workers 中，以避免阻塞主线程，从而提高页面渲染性能。</li></ul>`,22),c=[t];function l(o,i){return a(),s("div",null,c)}const r=n(p,[["render",l],["__file","websocket.html.vue"]]),k=JSON.parse('{"path":"/posts/other/websocket.html","title":"WebScoket","lang":"zh-CN","frontmatter":{"date":"2024-06-26T00:00:00.000Z","author":"letshirochi","category":["WebSocket"],"tag":["other","websocket"],"type":"other","excerpt":"<b>webscokect example.</b>"},"headers":[{"level":2,"title":"basic example","slug":"basic-example","link":"#basic-example","children":[]},{"level":2,"title":"method","slug":"method","link":"#method","children":[{"level":3,"title":"close()","slug":"close","link":"#close","children":[]}]},{"level":2,"title":"events","slug":"events","link":"#events","children":[{"level":3,"title":"close","slug":"close-1","link":"#close-1","children":[]},{"level":3,"title":"error","slug":"error","link":"#error","children":[]},{"level":3,"title":"message","slug":"message","link":"#message","children":[]},{"level":3,"title":"open","slug":"open","link":"#open","children":[]}]},{"level":2,"title":"advanced","slug":"advanced","link":"#advanced","children":[{"level":3,"title":"高并发渲染优化","slug":"高并发渲染优化","link":"#高并发渲染优化","children":[]}]}],"git":{"updatedTime":1719369286000,"contributors":[{"name":"letshirochiki","email":"1487377445@qq.com","commits":1}]},"filePathRelative":"posts/other/websocket.md"}');export{r as comp,k as data};
