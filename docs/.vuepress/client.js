import { defineClientConfig } from 'vuepress/client'
import Article from './layouts/Article.vue'
// import Category from './layouts/Category.vue'
import Tag from './layouts/Tag.vue'
import Timeline from './layouts/Timeline.vue'
import FrontEnd from './layouts/FrontEnd.vue'
import BackEnd from './layouts/BackEnd.vue'
import Other from './layouts/Other.vue'
import Category from './layouts/Category.vue'
export default defineClientConfig({
    // we provide some blog layouts
    layouts: {
        Article,
        FrontEnd,
        BackEnd,
        Other,
        Category,
        Tag,
        Timeline,
    },
})