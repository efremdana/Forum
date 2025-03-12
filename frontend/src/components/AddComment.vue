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
      :disabled="!text.trim()"
      class="mt-3 px-4 py-2 rounded-lg text-white transition-colors"
      :class="{
        'bg-blue-500 hover:bg-blue-600': text.trim(),
        'bg-gray-300 cursor-not-allowed': !text.trim(),
      }"
    >
      {{ defineAction }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    textComment: {
      type: String,
      default: '',
    },
    isEdit: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    defineAction() {
      return this.isEdit ? 'Изменить' : 'Добавить'
    },
  },

  data() {
    return {
      text: this.textComment,
    }
  },

  methods: {
    submitComment() {
      if (!this.text.trim()) return
      this.$emit('submit', { text: this.text.trim() })
      if (!this.isEdit) {
        this.text = ''
      }
    },
  },

  watch: {
    textComment(newVal) {
      this.text = newVal
    },
  },
}
</script>
