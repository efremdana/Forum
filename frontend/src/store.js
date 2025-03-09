import { createStore } from 'vuex'

const store = createStore({
  state: {
    articles: [
      { id: 1, name: "Название статьи 1", createDate: "2023-10-01", text: "1" },
      { id: 2, name: "Название статьи 2", createDate: "2023-10-02", text: "2" },
      { id: 3, name: "Название статьи 3", createDate: "2023-10-03", text: "3" },
      { id: 4, name: "Название статьи 4", createDate: "2023-10-04", text: "4" },
      { id: 5, name: "Название статьи 5", createDate: "2023-10-05", text: "5" },
      { id: 6, name: "Название статьи 6", createDate: "2023-10-06", text: "6" },
      { id: 7, name: "Название статьи 7", createDate: "2023-10-07", text: "7" },
      { id: 8, name: "Название статьи 8", createDate: "2023-10-08", text: "8" },
      { id: 9, name: "Название статьи 9", createDate: "2023-10-09", text: "9" },
      { id: 10, name: "Название статьи 10", createDate: "2023-10-10", text: "10" },
      { id: 11, name: "Название статьи 11", createDate: "2023-10-11", text: "11" },
      { id: 12, name: "Название статьи 12", createDate: "2023-10-12", text: "12" },
      { id: 13, name: "Название статьи 13", createDate: "2023-10-13", text: "13" },
      { id: 14, name: "Название статьи 14", createDate: "2023-10-14", text: "14" },
      { id: 15, name: "Название статьи 15", createDate: "2023-10-15", text: "15" },
      { id: 16, name: "Название статьи 16", createDate: "2023-10-16", text: "16" },
      { id: 17, name: "Название статьи 17", createDate: "2023-10-17", text: "17" },
      { id: 18, name: "Название статьи 18", createDate: "2023-10-18", text: "18" },
    ],
  },
  mutations: {
    addArticle(state, article) {
      this.state.articles.push({
        name: article.name,
        text: article.text,
        createDate: new Date().toISOString().split("T")[0]
      });
    },
  }
})

export default store
