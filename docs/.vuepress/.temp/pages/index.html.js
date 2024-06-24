import comp from "G:/letshirochiki-blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"go front-end\",\"link\":\"/frontend/\",\"type\":\"primary\"},{\"text\":\"go back-end\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"git\":{\"updatedTime\":1716886197000,\"contributors\":[{\"name\":\"letshirochiki\",\"email\":\"1487377445@qq.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
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
