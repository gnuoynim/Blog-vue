<template>
  <div>
    <h1>Blog</h1>
  </div>
  <input v-model="text">
  <p>{{ text }}입력</p>
  <RouterView :data="data"></RouterView>
  <RouterLink to="/todo">todoPage</RouterLink>
</template>
<script>

import data from './data.js';
import { reactive } from 'vue'


export default {
  name: 'App',
  setup() {
    const state = reactive({ count: 0 })
    return {
      data,
      text: '',
      state
    }
  },
  components: {
  
  }
}
</script>
<style scoped>
header {
  line-height: 1.5;
}
</style>
