import comp from "G:/letshirochiki-blog/docs/.vuepress/.temp/pages/frontend/index.html.vue"
const data = JSON.parse("{\"path\":\"/frontend/\",\"title\":\"FrontEnd\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"FrontEnd\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"frontend\"},\"layout\":\"FrontEnd\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
