<template>
  <div>
    <nav>
      <RouterLink :to="{name: 'home'}">Home</RouterLink>
      <span> | </span>
      <RouterLink :to="{name: 'products'}">Products</RouterLink>
      <span> | </span>
      <RouterLink :to="{name: 'favorite'}">Favorite</RouterLink>
      <span> | </span>
      <span v-if="favoriteNum > 0">{{ favoriteNum }}</span>
    </nav>
  </div>
  <RouterView/>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useProductStore } from './stores/counter';
import { computed } from 'vue';

const store = useProductStore()

const favoriteNum = computed(() => {
  return store.productList.filter(product => product.isFavorite).length
})
</script>

<style scoped>

</style>