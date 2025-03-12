<template>
  <div
    v-if="!hiddenModal"
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 class="text-xl font-semibold mb-4">
        {{ isEditing ? 'Редактировать статью' : 'Добавить статью' }}
      </h2>
      <label class="block mb-2">Название</label>
      <input v-model="localNameArticle" type="text" class="w-full p-2 border rounded mb-4" />
      <label class="block mb-2">Текст статьи</label>
      <textarea v-model="localTextArticle" class="w-full p-2 border rounded mb-4" rows="4"></textarea>
      <div class="flex justify-end space-x-2">
        <button @click="$emit('close')" class="px-4 py-2 bg-gray-400 text-white rounded-lg">
          Закрыть
        </button>
        <button @click="submitArticle" class="px-4 py-2 bg-green-500 text-white rounded-lg">
          {{ isEditing ? 'Сохранить' : 'Добавить' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hiddenModal: Boolean,
    initialArticle: Object,
  },
  data() {
    return {
      localNameArticle: '',
      localTextArticle: '',
    };
  },
  computed: {
    isEditing() {
      return this.initialArticle && this.initialArticle.name !== undefined;
    },
  },
  watch: {
    initialArticle: {
      immediate: true,
      handler(newValue) {
        this.localNameArticle = newValue?.name || '';
        this.localTextArticle = newValue?.text || '';
      },
    },
  },
  methods: {
    submitArticle() {
      if (this.localNameArticle.trim() && this.localTextArticle.trim()) {
        this.$emit('submit', {
          name: this.localNameArticle,
          text: this.localTextArticle,
        });
      }
    },
  },
};
</script>
