<template>
  <div class="blog__item" :class="{ reverse: isReverse }">
    <div>
      <img :src="image" alt="" />
    </div>
    <div>
      <div class="blog__item__content">
        <h4 class="blog__item__title">{{ title }}</h4>
        <p class="blog__item__description">
          {{ description }}
        </p>
        <button class="button button--dark">Read more</button>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  isReverse: Boolean
})
</script>
