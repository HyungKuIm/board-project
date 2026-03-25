<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

const posts = ref([]);

const fetchPosts = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/posts");
    posts.value = res.data;
  } catch (err) {
    console.error(err);
  }
}

onMounted(() => {
  fetchPosts();
});

</script>

<template>
  <div>
    <h2>게시판 목록</h2>

    <ul>
      <li v-for="post in posts" :key="post._id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <small>{{ post.createdAt }}</small>
      </li>
    </ul>
  </div>
</template>



<style scoped>

</style>