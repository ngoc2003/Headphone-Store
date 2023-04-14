<template>
  <div id="bestSelling">
    <div class="heading-section">best selling</div>
    <div class="product__list">
      <ProductCard
        v-for="product in products.reverse()"
        :key="product.name + 'Best selling'"
        :name="product.name"
        :images="product.images"
        :price="product.cost"
      />
    </div>
  </div>
</template>

<script setup>
import { products } from '@/data'
import ProductCard from '@/containers/card/ProductCard.vue'
</script>
