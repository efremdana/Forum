<template>
  <div class="mt-6 bg-gray-50 p-4 rounded-lg shadow">
    <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ defineAction }} комментарий</h3>
    <textarea
      v-model="text"
      class="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
      rows="3"
      placeholder="Введите ваш комментарий..."
    ></textarea>
    <button
      @click="submitComment"
      class="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      {{ defineAction }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['textComment', 'isEdit', 'isAdd'],

  data() {
    return {
      text: '',
    }
  },

  computed: {
    defineAction() {
      return this.isEdit ? 'Изменить' : 'Добавить'
    },
  },

  methods: {
    submitComment() {
      this.$emit('submit', { text: this.text })
      this.text = ''
    },
  },

  watch: {
    textComment(newValue) {
      this.text = newValue || ''
    },
  },
}
</script>
