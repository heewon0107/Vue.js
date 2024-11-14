<template>
  <div>
    <h1>장바구니 페이지</h1>
    <ProductDetail 
    v-for="product in store.favoriteProducts"
    :product="product">
  </ProductDetail>

  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/counter';
import ProductDetail from '@/components/ProductDetail.vue';
const store = useProductStore()
</script>

<style lang="scss" scoped>

</style>