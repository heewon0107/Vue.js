<template>
  <div>
    <h4>
      {{ quiz.pk }}번 문제.
      {{ quiz.question }}
    </h4>
      <label for="quiz">정답 입력</label><br>
      <input type="text" v-model.trim="quizAnswer" @keyup.enter="submitAnswer(quiz.pk, quiz.answer)">
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()

defineProps({
  quiz: Object
})
const quizAnswer = ref(null)

const submitAnswer = function(pk, answer) {
  if (!window.confirm(`${quizAnswer.value} 을/를 답안으로 제출합니다. 확실합니까?`)) {
    quizAnswer.value = null
    return
  }
  router.push({
    name: 'answer',
    params: {pk: pk, answer: answer},
    query: {answer: quizAnswer.value}
  })
}
</script>

<style lang="scss" scoped>

</style>