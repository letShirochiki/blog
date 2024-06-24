<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import ArticleList from '../components/ArticleList.vue'

const frontends = useBlogType('frontend')

</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <ArticleList :items="frontends.items" />
      </main>
    </template>
  </ParentLayout>
</template>
