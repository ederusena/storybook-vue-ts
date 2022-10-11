<script setup lang="ts">
import Card from "../components/Card/Card.vue";
import { ref } from "vue";
import Button from "../components/Button/Button.vue";

const post = ref({
  article: "Artigo",
  author: "Eder Sena",
  date: "Mar 16, 2022",
  readingTime: "66 min",
  title: "Por que vue 3 é baum?",
  image:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  subject:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus.",
});
</script>

<template>
  <main>
    <Card
      :author="post.author"
      :title="post.title"
      :article="post.article"
      :subject="post.subject"
      :date="post.date"
      :readingTime="post.readingTime"
      :image="post.image"
    />

    <Button label="Clica aqui" size="normal"/>
  </main>
</template>
