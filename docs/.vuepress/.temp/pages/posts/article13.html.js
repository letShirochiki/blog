import comp from "G:/letshirochiki-blog/docs/.vuepress/.temp/pages/posts/article13.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article13.html\",\"title\":\"Article 12\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-01-12T00:00:00.000Z\",\"category\":[\"CategoryA\",\"CategoryB\"],\"tag\":[\"tag C\",\"tag F\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1719211060000,\"contributors\":[{\"name\":\"letshirochiki\",\"email\":\"1487377445@qq.com\",\"commits\":1}]},\"filePathRelative\":\"posts/article13.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
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
