<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h1 class="text-3xl font-bold text-gray-800">{{ article.name }}</h1>
    <p class="text-sm text-gray-500 mt-1">Последнее редактирование: {{ article.updateDate }}</p>
    <p class="mt-4 text-gray-700">{{ article.text }}</p>

    <div class="mt-6">
      <h2 class="text-2xl font-semibold text-gray-800">Комментарии</h2>
      <div id="comments-list">
        <ListComments
          @del="deletedComment"
          @edit="editEventComment"
          :listComments="listComments"
        />
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
  </div>
</template>

<script>
import ListComments from "@/components/ListComments.vue";
import AddComment from "@/components/AddComment.vue";
export default {
  components: {ListComments, AddComment},
  data() {
    return {
      article: undefined,
      listComments: [],
      currentEditComment: "",
      editIndex: null,
      isAdd: true,
      isEdit: false
    }
  },

  methods: {
    deletedComment(index) {
      this.listComments.splice(index, 1)
    },
    editEventComment({ text, index }) {
      this.currentEditComment = text
      this.editIndex = index
      this.isEdit = true
    },
    clickFormComment(comment) {
      if (this.isEdit) {
        this.listComments[this.editIndex] = comment.text
        this.isEdit = false
        this.currentEditComment = ""
      }
      else if (this.isAdd) {
        this.listComments.push(comment.text)
        this.currentEditComment = ""
      }
    }
  },

  watch: {
    isEdit(newValue){
      this.isAdd = !newValue
    }
  },

  created() {
    debugger;
    const articleID = Number(this.$route.params.articleID)
    this.article = this.$store.state.articles.find(article => article.id === articleID)
  }
}
</script>
