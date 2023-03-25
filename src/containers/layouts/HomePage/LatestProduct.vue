<script setup>
import LatestProductCard from '@/containers/card/LatestProductCard.vue'
import { products } from '@/data'
console.log(products)
</script>

<template>
  <div id="latest-product" class="container">
    <h4 class="heading-section">{{ $t('heading.latestProduct') }}</h4>
    <div class="latest-product__list">
      <LatestProductCard
        v-for="product in products"
        :images="product.images"
        :price="product.cost"
        :name="product.name"
        :key="product.name"
      />
    </div>
  </div>
</template>
