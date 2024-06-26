import comp from "G:/letshirochiki-blog/docs/.vuepress/.temp/pages/tag/websocket/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/websocket/\",\"title\":\"Tag websocket\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Tag websocket\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"websocket\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
