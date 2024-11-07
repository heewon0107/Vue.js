<template>
  <div>
    <form @submit.prevent="createFunc">
      <label for="">이름</label>
      <input type="text" v-model="name">
      <label for="">직함</label>
      <input type="text" v-model="title">
      <button>명함 추가</button>
    </form>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const name = ref('')
const title = ref('')
const emit = defineEmits(['createCardEvent'])

const createFunc = function () {
  const createInfo = ref({
    name : name.value, title: title.value
  })
  emit('createCardEvent', createInfo)
  name.value = ''
  title.value = ''
}
</script>

<style scoped>

</style>