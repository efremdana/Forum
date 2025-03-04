<template>
  <div class="container mx-auto p-4">
    <header class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Форум</h1>
      <button @click="add" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Добавить статью
      </button>
    </header>

    <div v-for="article in articles" :key="article.name" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold text-gray-800">{{ article.name }}</h2>
        <p class="text-sm text-gray-500 mt-2">{{ article.createDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // reactive state
  data() {
    return {
      articles: [
        {name: "Название статьи 1", createDate: "Дата создания: 2023-10-01"},
        {name: "Название статьи 2", createDate: "Дата создания: 2023-10-02"},
        {name: "Название статьи 3", createDate: "Дата создания: 2023-10-03"},
        {name: "Название статьи 4", createDate: "Дата создания: 2023-10-04"},
      ]
    }
  },

  methods: {
    add() {
      console.log("Добавлено")
    }
  }
}
</script>
