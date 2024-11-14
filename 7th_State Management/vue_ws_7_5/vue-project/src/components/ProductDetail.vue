<template>
  <div>
    <h3>{{ product.name }}</h3>
    <img :src="product.imagePath" style="width: 300px;" alt="">
    <p>\ {{ product.price }}</p>

    <button v-if="product.isFavorite" style="color: red;" @click="store.favoriteUpdate(index)">♥</button>
    <button v-else style="color: gray;" @click="store.favoriteUpdate(index)">♡</button>
    <hr>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/counter';
import { computed } from 'vue';
const store = useProductStore()

defineProps({
  product: Object,
  index : Number
})

const heart = computed(() => {
  return store.productList[1].isFavorite ? '♥' : '♡'
})

</script>

<style lang="scss" scoped>

</style>