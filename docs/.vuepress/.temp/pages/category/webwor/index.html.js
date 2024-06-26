import comp from "G:/letshirochiki-blog/docs/.vuepress/.temp/pages/category/webwor/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/webwor/\",\"title\":\"Category WebWor\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Category WebWor\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"WebWor\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
