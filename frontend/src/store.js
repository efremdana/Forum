import { createStore } from 'vuex'
import { getAllArticles, createArticle, updateArticle, deleteArticle } from './api/article.js'
import {
  getAllCommentsForArticle,
  createComment,
  updateComment,
  deleteComment,
} from './api/comment.js'

const store = createStore({
  state: {
    articles: [],
    commentsOnCurrentArticles: [],
  },
  mutations: {
    setArticles(state, articles) {
      state.articles = articles
    },
    setComments(state, comments) {
      state.commentsOnCurrentArticles = comments.map(comment => ({
        id: comment.id,
        text: comment.text
      }))
    },
    pushArticle(state, article) {
      state.articles.push(article)
    },
    pushComment(state, comment) {
      state.commentsOnCurrentArticles.push({
        id: comment.id,
        text: comment.text,
      })
    },
    setArticle(state, article) {
      const index = state.articles.findIndex(a => a.id === article.id)
      if (index !== -1) {
        state.articles[index] = article
      }
    },
    setComment(state, comment) {
      const index = state.commentsOnCurrentArticles.findIndex(c => c.id === comment.id)
      if (index !== -1){
        state.commentsOnCurrentArticles[index] = comment
      }
    },
    removeArticle(state, articleID) {
      state.articles = state.articles.filter(article => article.id !== articleID)
    },
    removeComment(state, commentID) {
      state.commentsOnCurrentArticles =
        state
          .commentsOnCurrentArticles
          .filter(
            comment => comment.id !== commentID
          )
    },
  },

  actions: {
    async loadArticles({ commit }) {
      try {
        const articles = await getAllArticles()
        commit('setArticles', articles)
      } catch (error) {
        console.error('Ошибка загрузки статей:', error)
      }
    },
    async loadComments({ commit }, articleID) {
      try {
        const comments = await getAllCommentsForArticle(articleID)
        commit('setComments', comments)
      } catch (error) {
        console.error('Ошибка загрузки комментариев:', error)
      }
    },
    async addArticle({ commit }, articleNew) {
      try {
        const article = await createArticle(articleNew.name, articleNew.text)
        commit('pushArticle', article)
      } catch (error) {
        console.error('Ошибка добавления статьи:', error)
      }
    },
    async addComment({ commit }, { commentNew, articleID }) {
      try {
        const comment = await createComment(articleID, commentNew.text)
        commit('pushComment', comment)
      } catch (error) {
        console.error('Ошибка добавления комментария:', error)
      }
    },
    async updateArticle({ commit }, updatedArticle){
      try {
        const answer = await updateArticle(updatedArticle.id, updatedArticle.name, updatedArticle.text)
        commit('setArticle', updatedArticle)
      } catch (error) {
        console.error('Ошибка редактирования статьи:', error)
      }
    },
    async updateComment({ commit }, { commentUpdate, articleID }){
      try {
        const answer = await updateComment(articleID, commentUpdate.id, commentUpdate.text)
        commit('setComment', commentUpdate)
      } catch (error) {
        console.error('Ошибка редактирования комментария:', error)
      }
    },
    async deleteArticle({ commit }, articleID) {
      try {
        const answer = await deleteArticle(articleID)
        commit('removeArticle', articleID)
      } catch (error) {
        console.error('Ошибка удаления статьи:', error)
      }
    },
    async deleteComment({ commit }, { commentID, articleID }){
      try {
        const answer = await deleteComment(articleID, commentID)
        commit('removeComment', commentID)
      } catch (error) {
        console.error('Ошибка удаления комментария:', error)
      }
    },
  },
})

export default store
