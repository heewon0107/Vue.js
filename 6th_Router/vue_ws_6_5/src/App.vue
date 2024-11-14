<template>
  <div class="justify-content-center text-center">
    <div class="card" style="width: 18rem;">
      <h1 class="">퀴즈 앱</h1>
        <div class="card-body">
          <p class="card-text">여기는 퀴즈의 나라 입니다.</p>
        </div>
    </div>
   
    <div class="container ">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid mx-auto">
          <RouterLink :to="{name: 'home'}">Home</RouterLink>
          <span> | </span>
          <RouterLink :to="{name: 'quiz'}">Quiz</RouterLink>
        </div>
      </nav>
    </div>
    
  </div> 
  <RouterView/>
</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<style scoped>

</style>