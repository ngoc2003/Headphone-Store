<!-- eslint-disable vue/no-reserved-component-names -->
<template>
  <Topbar />
  <HeaderVue />
  <HeaderNavigation />
  <RouterView />
</template>

<script setup lang="ts">
import HeaderVue from './containers/layouts/Header.vue'
import Topbar from './containers/layouts/Header/Topbar.vue'
import HeaderNavigation from './containers/layouts/Header/HeaderNavigation.vue'
</script>
