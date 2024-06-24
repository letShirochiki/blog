---
date: 2024-06-03
author: letshirochi
category:
  - Cesium
tag:
  - frontend
  - cesium
type: frontend
excerpt: <s>A sticky article demo.</s>
---

# Cesium

## Getting started
<!-- > Quickstart -->

<CodeGroup>

  <CodeGroupItem title="yarn">

```bash:no-line-numbers
yarn add cesium vite-plugin-cesium
```

  </CodeGroupItem>

  <CodeGroupItem title="npm" >

```bash:no-line-numbers
npm install cesium vite-plugin-cesium
```

  </CodeGroupItem>

  <CodeGroupItem title="pnpm">

  ```bash:no-line-numbers
  pnpm install cesium vite-plugin-cesium
  ```

  </CodeGroupItem>
</CodeGroup>

## Config
> vite config

``` js title="vite.config.js"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium'

export default defineConfig({
  plugins: [
    vue(),
    cesium(),
  ],
})
```

> import

``` js title="App.vue"
import * as Cesium from 'cesium'
console.log(Cesium)
```
> example

``` js
<template>  <div id="cesiumContainer"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import * as Cesium from 'cesium'

onMounted(() => {
  // 使用Cesium的Ion服务进行认证
  Cesium.Ion.defaultAccessToken = '你的Token';

  // 创建一个Viewer实例
  const viewer = new Cesium.Viewer('cesiumContainer', {
    // 使用默认的影像图层和地形图层
    terrainProvider: Cesium.createWorldTerrain({ requestWaterMask: true })
  })

  // 其他初始化操作...
})
</script>

<style scoped>
#cesiumContainer {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
```