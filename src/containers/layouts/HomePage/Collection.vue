<script setup>
import CollectionCard from '@/containers/card/CollectionCard.vue'
import { products } from '@/data'
const collections = products.slice(0, 3)
console.log(collections)
</script>
<template>
  <div id="collection" class="container between-center">
    <CollectionCard
      :name="collection.name"
      :image="collection.images[0]"
      v-for="collection in collections"
      :key="collection.name"
    />
  </div>
</template>
