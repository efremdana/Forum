<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import ListArticle from "@/components/ListArticle.vue";
</script>

<template>
  <header>
<!--    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->

    <div class="wrapper">
      <ListArticle />
    </div>
  </header>

<!--  <main>-->
<!--    <TheWelcome />-->
<!--  </main>-->
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
