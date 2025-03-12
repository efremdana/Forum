<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg relative">
    <button
      @click="openEditModal"
      class="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600"
    >
      <img src="/icon-edit.png" alt="Редактировать" class="w-5 h-5" />
    </button>
    <h1 class="text-3xl font-bold text-gray-800">{{ article.name }}</h1>
    <p class="text-sm text-gray-500 mt-1">Последнее редактирование: {{ article.updatedAt }}</p>
    <p class="mt-4 text-gray-700">{{ article.text }}</p>

    <div class="mt-6">
      <h2 class="text-2xl font-semibold text-gray-800">Комментарии</h2>
      <CommentFilter @filter="applyDateFilter" />
      <div id="comments-list">
        <ListComments @del="deletedComment" @edit="editEventComment" :listComments="listComments" />
      </div>

      <div id="comment-form">
        <AddComment
          @submit="clickFormComment"
          :textComment="currentEditComment"
          :isAdd="isAdd"
          :isEdit="isEdit"
        />
      </div>
    </div>
    <FormAddArticle
      v-if="isEditArticle"
      @close="isEditArticle = false"
      @submit="saveEditArticle"
      :hiddenModal="!isEditArticle"
      :initialArticle="article"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ListComments from '@/components/ListComments.vue'
import AddComment from '@/components/AddComment.vue'
import FormAddArticle from '@/components/FormAddArticle.vue'
import CommentFilter from '@/components/CommentFilter.vue'

export default {
  components: { ListComments, AddComment, FormAddArticle, CommentFilter },
  data() {
    return {
      currentEditComment: '',
      editIDComment: null,
      isAdd: true,
      isEdit: false,
      isEditArticle: false,
    }
  },
  computed: {
    ...mapState({
      articles: (state) => state.articles,
      listComments: (state) => state.commentsOnCurrentArticles || [],
    }),
    currentArticleID() {
      return Number(this.$route.params.articleID)
    },
    article() {
      return this.articles.find((article) => article.id === this.currentArticleID) || {}
    },
  },
  methods: {
    ...mapActions([
      'filterComments',
      'updateArticle',
      'deleteComment',
      'updateComment',
      'addComment',
      'loadComments',
    ]),
    applyDateFilter({ startDate, endDate }) {
      this.filterComments({ startDate, endDate })
    },
    openEditModal() {
      this.isEditArticle = true
    },
    saveEditArticle(updatedArticle) {
      this.updateArticle({
        ...this.article,
        ...updatedArticle,
        updatedAt: new Date().toISOString(),
      })
      this.isEditArticle = false
    },
    deletedComment(commentID) {
      this.deleteComment({ commentID, articleID: this.currentArticleID })
    },
    editEventComment({ text, id }) {
      this.currentEditComment = text
      this.editIDComment = id
      this.isEdit = true
    },
    clickFormComment(comment) {
      if (this.isEdit) {
        this.updateComment({
          commentUpdate: { id: this.editIDComment, text: comment.text },
          articleID: this.currentArticleID,
        })
        this.isEdit = false
        this.currentEditComment = ''
      } else {
        this.addComment({ commentNew: comment, articleID: this.currentArticleID })
        this.currentEditComment = ''
      }
    },
  },
  watch: {
    isEdit(newValue) {
      this.isAdd = !newValue
    },
  },
  created() {
    this.loadComments(this.currentArticleID)
  },
}
</script>
