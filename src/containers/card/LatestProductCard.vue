<script setup>
import { ref, defineProps, onMounted } from 'vue'

const imageContainer = ref()
const actions = ref()
const image = ref()

const props = defineProps({
  name: String,
  images: Array,
  price: Number
})

function handleChangeImageToInitial() {
  image.value = props.images[0]
  const buttons = actions.value.querySelectorAll('button')
  buttons.forEach((button) => {
    button.style = 'transform: translateY(40px); opacity:0.6'
  })
}

function handleChangeImageWhenHover() {
  image.value = props.images[1]
  console.log(actions.value.querySelectorAll('button'))
  const buttons = actions.value.querySelectorAll('button')
  buttons.forEach((button) => {
    button.style = 'transform: translateY(0); opacity:1'
  })
}

onMounted(() => {
  imageContainer.value.addEventListener('mouseover', handleChangeImageWhenHover)
  imageContainer.value.addEventListener('mouseleave', handleChangeImageToInitial)
  handleChangeImageToInitial()
})
</script>
<template>
  <div class="latest-product__item">
    <div ref="imageContainer" class="latest-product__item__image">
      <img :src="image" alt="" />
      <div ref="actions" class="latest-product__item__action">
        <button class="button button--small button--dark">{{ $t('button.shopNow') }}</button>
        <button class="button button--small button--dark">hi</button>
      </div>
    </div>
    <p class="latest-product__item__name">
      {{ name }}
    </p>
    <p class="latest-product__item__price">
      {{ $t('price', { price }) }}
    </p>
  </div>
</template>
