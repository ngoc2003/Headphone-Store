<script setup lang="ts">
import BannerSection from '@/containers/layouts/HomePage/BannerSection.vue'
import CollectionSection from '@/containers/layouts/HomePage/CollectionSection.vue'
import LatestProduct from '@/containers/layouts/HomePage/LatestProduct.vue'
import OutStanding from '@/containers/layouts/HomePage/OutStanding.vue'
import BestSellingSection from '@/containers/layouts/HomePage/BestSellingSection.vue'
import LatestBlog from '@/containers/layouts/HomePage/LatestBlog.vue'
</script>

<template>
  <main class="main">
    <BannerSection />
    <CollectionSection />
    <LatestProduct />
    <OutStanding />
    <BestSellingSection />
    <LatestBlog />
  </main>
</template>
