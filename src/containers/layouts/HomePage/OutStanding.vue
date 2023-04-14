<template>
  <div id="outStanding">
    <div class="container center-center">
      <div class="img-container">
        <img :src="data.images[0]" alt="" />
      </div>
      <div>
        <h4 class="outStanding__title">{{ data.name }}</h4>
        <span class="outStanding__description">{{ data.long_des }}</span>
        <span>
          <button class="button button--dark">shop now</button>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { products } from '@/data'
const data = products[0]
</script>
