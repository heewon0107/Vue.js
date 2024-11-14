<template>
  <div>
    <QuizCreate @updatequiz="updateQuiz"/>
    <QuizDetail 
    v-for="(quiz) in sortedQuizList" 
    :key="quiz.pk"
    :quiz="quiz"
    />
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import QuizDetail from '@/components/QuizDetail.vue'
import QuizCreate from '../components/QuizCreate.vue';
// import {RouterLink} from 'vue-router'
let pk = 1

const quizList = ref([
  {pk: pk++, question: 'Python 웹 프레임 워크 중 하나로, 마이크로 웹 프레임워크로 빠른 개발을 지원하는 것은?', answer: 'flask'},
  {pk: pk++, question: 'HTML에서 텍스트 입력란을 만드는 데 사용되는 요소는?', answer: 'input'},
  {pk: pk++, question: '웹 애플리케이션에서 클라이언트의 데이터를 서버로 전송할 때 주로 사용되는 HTTP 메서드는?', answer: 'post'},
  {pk: pk++, question: 'Python의 가상 환경을 만들어 프로젝트 별로 라이브러리 의존성을 격리시키는 명렁어는?', answer: 'virtualenv'},
  {pk: pk++, question: '웹 애플리케이션 개발 할 때, 사용자의 브라우저에 보여지는 부분을 렌더링하는 언어는 무엇인가요?', answer: 'html'}
])

const updateQuiz = function(quizData) {
  const newData = {
    pk: pk++,
    question: quizData.question,
    answer: quizData.answer
  }
  quizList.value.push(newData)
}

const sortedQuizList = computed (() => {
  return quizList.value.sort((a,b) => b.pk - a.pk)
})
</script>

<style scoped>

</style>