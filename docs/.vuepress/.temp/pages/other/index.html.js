import comp from "G:/letshirochiki-blog/docs/.vuepress/.temp/pages/other/index.html.vue"
const data = JSON.parse("{\"path\":\"/other/\",\"title\":\"Other\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Other\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"other\"},\"layout\":\"Other\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
