<template>
  <div id="banner">
    <div class="container" ref="bannerContainer">
      <div class="container--small">
        <div
          v-show="bannerContainer"
          v-for="banner in bannerData"
          :key="banner.name"
          class="slider fade"
        >
          <div class="content">
            <h3 class="name">
              {{ banner.name }}
            </h3>
            <h2 class="short_des truncate-text truncate-text-2">
              {{ banner.short_des }}
            </h2>
            <p class="long_des truncate-text truncate-text-4">
              {{ banner.long_des }}
            </p>
            <div>
              <button class="button button--dark">
                shop now
              </button>
            </div>
          </div>
          <img :src="banner.images[0]" :alt="banner.name" />
        </div>
      </div>
      <span class="navigation center-center prev" @click="prevSlide"
        ><i class="fas fa-chevron-left"></i
      ></span>
      <span class="navigation center-center next" @click="nextSlide"
        ><i class="fas fa-chevron-right"></i
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { products as bannerData } from '@/data'
const bannerContainer = ref()
const slideActive = ref(0)
const intervalId = ref()

function clearTime() {
  clearInterval(intervalId.value)
  intervalId.value = setInterval(() => {
    nextSlide()
  }, 5000)
}

function showSlide() {
  const slides = bannerContainer.value.querySelectorAll('.slider')

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

  slides[slideActive.value].style.display = 'flex'
}

function nextSlide() {
  clearTime()

  if (slideActive.value >= bannerData.length - 1) {
    slideActive.value = 0
  } else {
    slideActive.value += 1
  }
  nextTick(() => {
    showSlide()
  })
}

function prevSlide() {
  clearTime()

  if (slideActive.value <= 0) {
    slideActive.value = bannerData.length - 1
  } else {
    slideActive.value -= 1
  }
  nextTick(() => {
    showSlide()
  })
}

onMounted(() => {
  nextSlide()
})
</script>
