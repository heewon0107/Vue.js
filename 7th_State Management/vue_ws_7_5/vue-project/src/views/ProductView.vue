<template>
  <div>
    <h1>상품 목록 페이지</h1>
    <ProductDetail 
    v-for="(product, index) in store.productList" 
    :key="product.id"
    :product="product"
    :index="index"
    ></ProductDetail>
  </div>
</template>

<script setup>
import ProductDetail from '@/components/ProductDetail.vue'
import { useProductStore } from '@/stores/counter';

const store = useProductStore()
</script>

<style lang="scss" scoped>

</style>