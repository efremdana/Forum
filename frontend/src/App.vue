<template>
  <div class="flex justify-center w-full">
    <RouterView />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('loadArticles')
  },
}
</script>
