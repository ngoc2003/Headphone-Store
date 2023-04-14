<template>
  <div id="latestBlog" class="container">
    <h4 class="heading-section">latest blog</h4>
    <div class="blog__list">
      <BlogCard
        v-for="(blog, index) in blogs"
        :key="blog.image"
        :isReverse="index % 2"
        :image="blog.image"
        :description="blog.description"
        :title="blog.title"
      />
    </div>
  </div>
</template>
<script setup>
import BlogCard from '@/containers/card/BlogCard.vue'
import { blogs } from '@/data'
</script>
