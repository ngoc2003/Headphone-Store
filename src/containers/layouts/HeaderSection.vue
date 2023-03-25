<template>
  <div id="header">
    <div class="container--small between-center">
      <a href="#" class="logo">{{ $t('logo') }}</a>
      <SearchSection />
      <div class="icon-group">
        <i class="icon icon--big fas fa-bell"></i>
        <i class="icon icon--big fas fa-user"></i>
        <i class="icon icon--big fas fa-shopping-cart"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchSection from '@/components/Search/SearchSection.vue'
</script>
