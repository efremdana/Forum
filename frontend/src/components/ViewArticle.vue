<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg relative">
    <button
      @click="openEditModal"
      class="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
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
      @submit="updateArticle"
      :hiddenModal="!isEditArticle"
      :initialArticle="{ name: article.name, text: article.text }"
    />
  </div>
</template>

<script>
import ListComments from '@/components/ListComments.vue'
import AddComment from '@/components/AddComment.vue'
import FormAddArticle from "@/components/FormAddArticle.vue"
import CommentFilter from "@/components/CommentFilter.vue"
export default {
  components: { ListComments, AddComment, FormAddArticle, CommentFilter },
  data() {
    return {
      currentEditComment: '',
      editIndex: null,
      isAdd: true,
      isEdit: false,
      isEditArticle: false,
    }
  },

  computed: {
    currentArticleID() {
      return Number(this.$route.params.articleID)
    },
    article() {
      return this.$store.state.articles.find(article => article.id === this.currentArticleID) || {};
    },
    listComments() {
      return this.$store.state.commentsOnCurrentArticles || []
    },
  },

  methods: {
    applyDateFilter({ startDate, endDate }) {
      this.$store.dispatch('filterComments', { startDate, endDate })
    },
    openEditModal() {
      this.isEditArticle = true
    },
    updateArticle(updatedArticle) {
      const article = {
        id: this.article.id,
        createdAt: this.article.createdAt,
        updatedAt: this.article.updatedAt,
        name: updatedArticle.name,
        text: updatedArticle.text
      }
      this.$store.dispatch('updateArticle', article)
      this.isEditArticle = false
    },
    deletedComment(index) {
      const commentID = this.listComments[index].id
      this.$store.dispatch('deleteComment', {
        commentID,
        articleID: this.currentArticleID
      })
    },
    editEventComment({ text, index }) {
      this.currentEditComment = text
      this.editIndex = index
      this.isEdit = true
    },
    clickFormComment(comment) {
      if (this.isEdit) {
        const commentId = this.listComments[this.editIndex].id
        const updateComment = { id: commentId, text: comment.text }
        this.$store.dispatch('updateComment', {
          commentUpdate: updateComment,
          articleID: this.currentArticleID
        })
        this.isEdit = false
        this.currentEditComment = ''
      } else if (this.isAdd) {
        this.$store.dispatch('addComment', {
          commentNew: comment,
          articleID: this.currentArticleID
        })
        this.currentEditComment = ''
      }
    },
    updateComments() {
      this.$store.dispatch('loadComments', this.currentArticleID)
    },
  },

  watch: {
    isEdit(newValue) {
      this.isAdd = !newValue
    },
  },

  created() {
    this.updateComments()
  },
}
</script>
