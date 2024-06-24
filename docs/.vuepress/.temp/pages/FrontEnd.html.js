import comp from "G:/letshirochiki-blog/docs/.vuepress/.temp/pages/FrontEnd.html.vue"
const data = JSON.parse("{\"path\":\"/FrontEnd.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"FrontEnd.md\",\"excerpt\":\"<p>��#� �H�e�l�l�o� �V�u�e�P�r�e�s�s�\\n�\\n�</p>\\n\"}")
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
