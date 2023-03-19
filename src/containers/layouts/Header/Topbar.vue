<script lang="ts">
export default {
  data() {
    return {
      contactInfo: [
        {
          key: 'phoneNumber',
          label: this.$t('phoneNumber')
        },
        {
          key: 'email',
          label: this.$t('email')
        }
      ],
      languageSupport: [
        { key: 'en', label: 'EN' },
        { key: 'vi', label: 'VI' }
      ]
    }
  }
}
</script>
<template>
  <section class="container--small" id="topbar">
    <div class="list-horizontal">
      <div class="item" v-for="info in contactInfo" :key="info.key">
        {{ info.label }}
      </div>
    </div>
    <div class="list-horizontal">
      <div class="item" v-for="item in languageSupport" :key="item.key">
        {{ item.label }}
      </div>
    </div>
  </section>
</template>
