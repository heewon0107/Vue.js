<template>
  <div>
    <h1>퀴즈 생성</h1>
    <form @submit.prevent="createQuiz">
    <label for="question">문제</label><br>
    <textarea name="question" id="" placeholder="입력해" v-model.trim="question"></textarea><br>
    <label for="answer">답안</label><br>
    <input type="text" v-model.trim="answer"><br>
    <button type="submit">퀴즈 생성</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch, triggerRef } from 'vue';
import { onBeforeRouteLeave, useRouter } from 'vue-router';

const emit = defineEmits(['updatequiz'])
const question = ref(null)
const answer = ref(null)
const inWriting = ref(false)
const router = useRouter()

const createQuiz = function() {
  const quizData = {
    question : question.value,
    answer : answer.value,
  }
  emit('updatequiz', quizData)
}

onBeforeRouteLeave((to, from) => {
  if (inWriting.value && !window.confirm("작성중이던 문제가 있습니다. 다른 경로로 이동시 작성중이던 내용은 소멸됩니다. 이동하시겠습니까?")) {
    // 사용자가 이동을 취소했을 경우, 현재 페이지에 머물도록 함
    router.push({ name: from.name });
    question.value = null
    answer.value = null
    return false;  // 이동을 취소
  }
});


watch([question,answer], ([newquestion, newanswer]) => {
  if (newquestion === null && newanswer === null) {
    inWriting.value = false
  }else {
    inWriting.value = true
  }
})
</script>

<style lang="scss" scoped>

</style>