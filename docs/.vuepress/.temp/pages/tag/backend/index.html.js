import comp from "G:/letshirochiki-blog/docs/.vuepress/.temp/pages/tag/backend/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/backend/\",\"title\":\"Tag backend\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Tag backend\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"backend\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
