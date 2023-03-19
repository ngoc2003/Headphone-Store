import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    phoneNumber: '+840123456789',
    email: 'atshop@gmail.com',
    logo: 'ATShop',
    placeholder: {
      search: 'Search'
    },
    button: {
      shopNow: 'Shop now'
    }
  },
  vi: {
    phoneNumber: '+840123456789',
    email: 'atshop@gmail.com',
    logo: 'ATShop',
    placeholder: {
      search: 'Tìm kiếm'
    },
    button: {
      shopNow: 'Mua ngay'
    }
  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
