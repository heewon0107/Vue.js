<template>
  <div class="row">
    <p v-if="businessCard.length == 0">명함이 없습니다. 새로운 명함을 추가해주세요.</p>
    <p v-else-if="businessCard.length >= 0">현재 보유중인 명함 수 : {{ businessCard.length }}</p>
    <businessCardDetail 
    v-for="(card,index) in businessCard" :key="card.id"
    :card="card"
    :index="index"
    @delete-card="deleteCard(index)"
    />
  </div>
</template>

<script setup>

import { ref, watch } from 'vue';
const businessCard = ref([
  {
    name : '일론 머스크',
    title : '테슬라 테크노킹'
  },
  {
    name : '래리 엘리슨',
    title : '오라클 창업주'
  },
  {
    name : '빌 게이츠',
    title : '마이크로소프트 공동창업주'
  },
  {
    name : '래리 페이지',
    title : '구글 공동창업주'
  },
  {
    name : '세르게이 브린',
    title : '구글 공동창업주'
  }
])
import businessCardDetail from './businessCardDetail.vue';
const deleteCard = function(index) {
  businessCard.value.splice(index, 1)
}
const props = defineProps({
  newCard: Object
})

watch(props.newCard, (card,old)=> {
  const news = {
    name : card.name,
    title : card.title
  }
  
  businessCard.value.push(news)
})



</script>

<style scoped>

</style>