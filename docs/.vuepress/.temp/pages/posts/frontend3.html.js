import comp from "G:/letshirochiki-blog/docs/.vuepress/.temp/pages/posts/frontend3.html.vue"
const data = JSON.parse("{\"path\":\"/posts/frontend3.html\",\"title\":\"abc\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"posts/frontend3.md\",\"excerpt\":\"\\n\"}")
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
