<template>
  <div class="guide-container">
    <h3 class="title">퀴즈 앱 사용 방법</h3>
    <div class="step">
      <h1>1. 퀴즈 목록 확인하기</h1>
      <p>퀴즈 목록 페이지에서 다양한 퀴즈를 확인하세요.</p>
      <img :src="quizListImage" alt="퀴즈 목록 이미지">
    </div>
  </div>
  <div class="guide-container">
    <div class="step">
      <h1>2. 퀴즈 생성하기</h1>
      <p>퀴즈는 직접 생설 할 수도 있어요..</p>
      <img :src="quizCreate" alt="퀴즈 목록 이미지">
    </div>
  </div>
  <div class="guide-container">
    <div class="step">
      <h1>3, 정답 페이지</h1>
      <p>작성한 답안이 정답인지 확인하세요.</p>
      <img :src="quizAnswer" alt="퀴즈 목록 이미지">
    </div>
  </div>
</template>

<script setup>
import quizListImage from '@/assets/quizList.png';
import quizCreate from '@/assets/quizCreate.png';
import quizAnswer from '@/assets/quizAnswer.png';
</script>

<style scoped>
.guide-container {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.title {
  font-size: 1.8em;
  margin-bottom: 20px;
}

.step {
  margin-top: 30px;
}

h1 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

p {
  font-size: 1.1em;
  margin-bottom: 20px;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-top: 20px;
  border-radius: 8px;  /* 이미지의 모서리를 둥글게 */
}
</style>
