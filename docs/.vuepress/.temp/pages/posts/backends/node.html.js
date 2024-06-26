import comp from "G:/letshirochiki-blog/docs/.vuepress/.temp/pages/posts/backends/node.html.vue"
const data = JSON.parse("{\"path\":\"/posts/backends/node.html\",\"title\":\"Node\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-06-03T00:00:00.000Z\",\"author\":\"letshirochi\",\"category\":[\"Node\"],\"tag\":[\"backend\"],\"excerpt\":\"<p>fister study Nodejs.</p>\"},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1719211060000,\"contributors\":[{\"name\":\"letshirochiki\",\"email\":\"1487377445@qq.com\",\"commits\":1}]},\"filePathRelative\":\"posts/backends/node.md\"}")
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
