<template>
  <div class="card col-5 p-3 mx-auto g-2">
    <h1>이름 : {{ card.name }}</h1>
    <p>직함 : {{ card.title }}</p>
    <button @click="deleteCard(index)" class="mx-auto" style="width: 100px;">명함 삭제</button>

  </div>
</template>

<script setup>
defineProps({
  card : Object
})

const emit = defineEmits(['deleteCard'])

const deleteCard = function (index) {
  emit('deleteCard', index)
}
</script>

<style scoped>

</style>