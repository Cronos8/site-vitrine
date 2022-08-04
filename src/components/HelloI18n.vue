<template>
  <h1>{{ $t('title') }}</h1>
  <p>{{ $t('description') }}</p>
  <button class="px-6 py-2 text-sm text-green-100 bg-indigo-600 rounded">Next</button>
  <LocaleSwitcher />
</template>

<script>

import LocaleSwitcher from "./LocaleSwitcher.vue";

export default {
  name: 'HelloI18n',
  components: { LocaleSwitcher }
};
</script>

<!-- <i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n> -->
