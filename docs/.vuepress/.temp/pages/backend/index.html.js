import comp from "G:/letshirochiki-blog/docs/.vuepress/.temp/pages/backend/index.html.vue"
const data = JSON.parse("{\"path\":\"/backend/\",\"title\":\"BackEnd\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"BackEnd\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"backend\"},\"layout\":\"BackEnd\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
