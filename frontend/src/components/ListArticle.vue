<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-white shadow-sm w-full">
      <div class="container mx-auto p-4 flex items-center justify-between">
        <h1 class="text-3xl font-bold text-gray-800 text-center flex-grow">Форум</h1>
        <button
          @click="isAddArticle = true"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Добавить статью
        </button>
      </div>
    </header>

    <main class="flex-grow bg-gray-100">
      <div class="container mx-auto p-4 max-w-screen-xl">
        <div class="relative overflow-hidden">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center"
          >
            <router-link
              v-for="article in articlesInPage"
              :key="article.id"
              :to="{ name: 'ViewArticle', params: { articleID: article.id } }"
              class="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg w-full sm:max-w-[200px] will-change-transform block no-underline text-inherit"
            >
              <button
                @click.prevent.stop="deleteArticle(article.id)"
                class="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <img src="/icon-delete.png" alt="Удалить" class="w-4 h-4" />
              </button>
              <h2 class="text-xl font-semibold text-gray-800 break-words whitespace-normal">
                {{ article.name }}
              </h2>
              <p class="text-sm text-gray-500 mt-2 break-words whitespace-normal">
                {{ article.createdAt }}
              </p>
            </router-link>
          </div>
        </div>

        <div class="flex justify-center mt-6 space-x-4">
          <button
            @click="prevPage"
            :disabled="page === 1"
            class="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400"
          >
            Назад
          </button>

          <button
            @click="nextPage"
            :disabled="endIndexPage >= lengthArticles"
            class="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600"
          >
            Вперед
          </button>
        </div>

        <FormAddArticle
          v-if="isAddArticle"
          @close="isAddArticle = false"
          @submit="submitArticle"
          :hiddenModal="!hiddenModal"
        />
      </div>
    </main>
  </div>
</template>

<script>
import FormAddArticle from '@/components/FormAddArticle.vue'

export default {
  components: { FormAddArticle },
  data() {
    return {
      isAddArticle: false,
      page: 1,
    }
  },

  computed: {
    hiddenModal() {
      return {
        hidden: this.isAddArticle,
      }
    },
    articlesInPage() {
      const start = this.startIndexPage
      const end = this.endIndexPage
      return this.$store.state.articles.slice(start, end)
    },
    startIndexPage() {
      return 3 * 5 * (this.page - 1)
    },
    endIndexPage() {
      return 3 * 5 * this.page
    },
    lengthArticles() {
      return this.$store.state.articles.length
    },
  },

  methods: {
    submitArticle(article) {
      this.$store.dispatch('addArticle', article)
      this.isAddArticle = false
    },
    deleteArticle(articleID) {
      this.$store.dispatch('deleteArticle', articleID)
    },
    prevPage() {
      if (this.page > 1) this.page--
    },
    nextPage() {
      if (this.endIndexPage < this.lengthArticles) this.page++
    },
  },
}
</script>
