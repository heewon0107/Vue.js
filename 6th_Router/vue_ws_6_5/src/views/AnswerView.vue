<template>
  <div>
    <p>{{ route.params.pk }}번 문제</p>
    <h3>정답 확인</h3>
    <hr>
    <div>
      <h4 :style="{color: color}"> {{ resultText }}</h4>
      <p :style="{color: color}">나의 제출 답안: {{ route.query.answer }}</p>
      <p>정답 : {{ route.params.answer }}</p>
    </div>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute()
const color = computed(() => {
  return route.params.answer === route.query.answer ? "green" : "red"
})

const resultText = computed(() => {

  return route.params.answer === route.query.answer ? "정답입니다." : "틀렸습니다."
  
})

</script>

<style scoped>

</style>