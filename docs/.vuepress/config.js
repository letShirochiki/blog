import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'zh-CN',
    base: '/blog/',
    title: 'letshirochiki-blog-1st',
    description: 'development technology collection',
    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',

        navbar: [
            '/',
            {
                text: 'FrontEnd',
                link: '/frontend/'
            },
            {
                text: 'BackEnd',
                link: '/backend/'
            },
            {
                text: 'Other',
                link: '/other/'
            },
            {
                text: 'Category',
                link: '/category/',
            },
            {
                text: 'Tag',
                link: '/tag/',
            },
            {
                text: 'Timeline',
                link: '/timeline/',
            },
        ],
    }),

    plugins: [
        blogPlugin({
            // Only files under posts are articles
            filter: ({ filePathRelative }) =>
                filePathRelative ? filePathRelative.startsWith('posts/') : false,

            // Getting article info
            getInfo: ({ frontmatter, title, data }) => ({
                title,
                author: frontmatter.author || '',
                date: frontmatter.date || null,
                category: frontmatter.category || [],
                tag: frontmatter.tag || [],
                excerpt:
                    // Support manually set excerpt through frontmatter
                    typeof frontmatter.excerpt === 'string' ?
                        frontmatter.excerpt : data?.excerpt || '',
            }),

            // Generate excerpt for all pages excerpt those users choose to disable
            excerptFilter: ({ frontmatter }) =>
                !frontmatter.home &&
                frontmatter.excerpt !== false &&
                typeof frontmatter.excerpt !== 'string',

            category: [{
                key: 'category',
                getter: (page) => page.frontmatter.category || [],
                layout: 'Category',
                itemLayout: 'Category',
                frontmatter: () => ({
                    title: 'Categories',
                    sidebar: false,
                }),
                itemFrontmatter: (name) => ({
                    title: `Category ${name}`,
                    sidebar: false,
                }),
            },
            {
                key: 'tag',
                getter: (page) => page.frontmatter.tag || [],
                layout: 'Tag',
                itemLayout: 'Tag',
                frontmatter: () => ({
                    title: 'Tags',
                    sidebar: false,
                }),
                itemFrontmatter: (name) => ({
                    title: `Tag ${name}`,
                    sidebar: false,
                }),
            },
            ],

            type: [
                {
                    key: 'frontend',
                    // Remove archive articles
                    filter: (page) => page.frontmatter.tag?.includes('frontend'),
                    layout: 'FrontEnd',
                    frontmatter: () => ({
                        title: 'FrontEnd',
                        sidebar: false,
                    }),
                    // Sort pages with time and sticky
                    sorter: (pageA, pageB) => {
                        if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
                            return pageB.frontmatter.sticky - pageA.frontmatter.sticky

                        if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

                        if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

                        if (!pageB.frontmatter.date) return 1
                        if (!pageA.frontmatter.date) return -1

                        return (
                            new Date(pageB.frontmatter.date).getTime() -
                            new Date(pageA.frontmatter.date).getTime()
                        )
                    },
                },
                {
                    key: 'backend',
                    // Remove archive articles
                    filter: (page) => page.frontmatter.tag?.includes('backend'),
                    layout: 'BackEnd',
                    frontmatter: () => ({
                        title: 'BackEnd',
                        sidebar: false,
                    }),
                    // Sort pages with time and sticky
                    sorter: (pageA, pageB) => {
                        if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
                            return pageB.frontmatter.sticky - pageA.frontmatter.sticky

                        if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

                        if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

                        if (!pageB.frontmatter.date) return 1
                        if (!pageA.frontmatter.date) return -1

                        return (
                            new Date(pageB.frontmatter.date).getTime() -
                            new Date(pageA.frontmatter.date).getTime()
                        )
                    },
                },
                {
                    key: 'other',
                    // Remove archive articles
                    filter: (page) => page.frontmatter.tag?.includes('other'),
                    layout: 'Other',
                    frontmatter: () => ({
                        title: 'Other',
                        sidebar: false,
                    }),
                    // Sort pages with time and sticky
                    sorter: (pageA, pageB) => {
                        if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
                            return pageB.frontmatter.sticky - pageA.frontmatter.sticky

                        if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

                        if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

                        if (!pageB.frontmatter.date) return 1
                        if (!pageA.frontmatter.date) return -1

                        return (
                            new Date(pageB.frontmatter.date).getTime() -
                            new Date(pageA.frontmatter.date).getTime()
                        )
                    },
                },
                {
                    key: 'timeline',
                    // Only article with date should be added to timeline
                    filter: (page) => page.frontmatter.date instanceof Date,
                    // Sort pages with time
                    sorter: (pageA, pageB) =>
                        new Date(pageB.frontmatter.date).getTime() -
                        new Date(pageA.frontmatter.date).getTime(),
                    layout: 'Timeline',
                    frontmatter: () => ({
                        title: 'Timeline',
                        sidebar: false,
                    }),
                },
            ],
            hotReload: true,
        }),
    ],

    bundler: viteBundler(),
})