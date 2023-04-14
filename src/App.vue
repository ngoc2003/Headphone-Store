<!-- eslint-disable vue/no-reserved-component-names -->
<template>
  <TopbarSection />
  <HeaderSectionVue />
  <HeaderNavigation />
  <RouterView />
  <FooterSection />
</template>

<script setup lang="ts">
import HeaderSectionVue from './containers/layouts/HeaderSection.vue'
import TopbarSection from './containers/layouts/Header/TopbarSection.vue'
import HeaderNavigation from './containers/layouts/Header/HeaderNavigation.vue'
import FooterSection from './containers/layouts/Footer/FooterSection.vue'
</script>
