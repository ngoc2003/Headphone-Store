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
            <h2 class="short_des">
              {{ banner.short_des }}
            </h2>
            <p class="long_des">
              {{ banner.long_des }}
            </p>
            <div>
              <button class="button button--dark">
                {{ $t('button.shopNow') }}
              </button>
            </div>
          </div>
          <img :src="banner.images" :alt="banner.name" />
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
import { ref, onMounted, reactive } from 'vue'
import { bannerData } from '@/data'

const bannerContainer = ref()
const slideActive = ref(0)
const intervalId = ref()
const data = reactive([...bannerData])

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
  showSlide()
  clearTime()

  if (slideActive.value >= data.length - 1) {
    slideActive.value = 0
  } else {
    slideActive.value += 1
  }
}

function prevSlide() {
  showSlide()
  clearTime()

  if (slideActive.value <= 0) {
    slideActive.value = data.length - 1
  } else {
    slideActive.value -= 1
  }
}

onMounted(() => {
  clearTime()
})
</script>
