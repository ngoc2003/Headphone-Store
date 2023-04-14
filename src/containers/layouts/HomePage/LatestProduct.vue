<script setup>
import ProductCard from '@/containers/card/ProductCard.vue'
import { products } from '@/data'
</script>

<template>
  <div id="latest-product" class="container">
    <h4 class="heading-section">Latest Product</h4>
    <div class="product__list">
      <ProductCard
        :images="product.images"
        :price="product.cost"
        :name="product.name"
        v-for="product in products"
        :key="product.name"
      />
    </div>
  </div>
</template>
