<template>
  <div class="mt-4 space-y-4">
    <div
      v-for="comment in listComments"
      :key="comment.id"
      class="bg-gray-100 p-4 rounded-lg flex justify-between items-center"
    >
      <p class="text-gray-700">{{ comment.text }}</p>
      <div class="space-x-2">
        <button
          @click="deleteComment(comment.id)"
          class="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Удалить
        </button>
        <button
          @click="editComment(comment)"
          class="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Редактировать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listComments: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteComment(commentID) {
      this.$emit('del', commentID)
    },
    editComment(comment) {
      this.$emit('edit', { text: comment.text, id: comment.id })
    },
  },
}
</script>
