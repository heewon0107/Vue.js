<template>
  <div class="text-center">
    <header class="d-flex justify-content-center m-2">
      <div class="box p-4">
        <h1>명함 관리 페이지</h1>
      </div>
    </header>

    <main class="m-5">
      <p>명함을 관리하는 페이지입니다. 여기에 명함 목록이 표시됩니다.</p>
      <CreateCardForm
      @create-card-event="updateCard"
       />
    
    </main>


    <article class="m-5">
      <h2>보유 명함 목록</h2>
      <BusinessCard
      :new-card="newCard"
      />
    </article>

    <footer class="footer-content">ⓒ 2023 My Business Cards</footer>
  </div>
</template>

<script setup>
import {ref} from 'vue'

import BusinessCard from './components/BusinessCard.vue';
import CreateCardForm from './components/CreateCardForm.vue';
const newCard = ref({
  name : '',
  title : ''
})
const updateCard = function (cardInfo) {
   newCard.value.name = cardInfo.value.name
   newCard.value.title = cardInfo.value.title
}
</script>

<style scoped>
.box {
  background-color: cadetblue;
  color: white;
  width: 400px;
  height: 100px;
  padding: 20px;
  
}
footer {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 20px 0;
      position: relative;
      bottom: 0;
      width: 100%;
      position: fixed;
    }
</style>