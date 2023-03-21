<template>
  <div id="header-navigation" class="container--small center-center">
    <a
      :class="{ 'header-navigation-item--active': currentPath === item.path }"
      :href="item.path"
      v-for="item in headerNavigaiton"
      :key="item.label"
      >{{ item.label }}</a
    >
  </div>
</template>

<script setup>
const currentPath = window.location.pathname
const headerNavigaiton = [
  {
    label: 'HOME',
    path: '/'
  },
  {
    label: 'SHOP',
    path: '/shop'
  },
  {
    label: 'BLOG',
    path: '/blog'
  },
  {
    label: 'CONTACT',
    path: '/contact'
  }
]
</script>
