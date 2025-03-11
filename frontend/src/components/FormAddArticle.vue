<template>
  <div
    :class="{ hidden: hiddenModal }"
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 class="text-xl font-semibold mb-4">Добавить статью</h2>
      <label class="block mb-2">Название</label>
      <input v-model="nameArticle" type="text" class="w-full p-2 border rounded mb-4" />
      <label class="block mb-2">Текст статьи</label>
      <textarea v-model="textArticle" class="w-full p-2 border rounded mb-4" rows="4"></textarea>
      <div class="flex justify-end space-x-2">
        <button @click="$emit('close')" class="px-4 py-2 bg-gray-400 text-white rounded-lg">Закрыть</button>
        <button @click="addArticle" class="px-4 py-2 bg-green-500 text-white rounded-lg">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hiddenModal'],
  data() {
    return {
      nameArticle: "",
      textArticle: ""
    }
  },

  methods: {
    addArticle() {
      if (this.nameArticle.trim() && this.textArticle.trim()) {
        this.$emit('submit', { name: this.nameArticle, text: this.textArticle })
      }
    },
  },
}
</script>
