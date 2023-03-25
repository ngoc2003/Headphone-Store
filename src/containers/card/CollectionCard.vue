<script setup>
defineProps({
  name: String,
  image: String
})
</script>
<template>
  <div class="collection-card">
    <div class="collection-card__content">
      <h4 class="collection-card__title truncate-text truncate-text-2">{{ name }}</h4>
      <button class="button button--dark">Shop collection</button>
    </div>
    <div>
      <img :src="image" alt="" />
    </div>
  </div>
</template>
