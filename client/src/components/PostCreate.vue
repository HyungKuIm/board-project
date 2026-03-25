<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const title = ref("");
const content = ref("");
const loading = ref(false);
const errorMessage = ref("");

const router = useRouter();

const submitPost = async () => {
  errorMessage.value = "";

  if (!title.value.trim() || !content.value.trim()) {
    errorMessage.value = "제목과 내용을 입력해주세요.";
    return;
  }

  try {
    loading.value = true;

    await axios.post("http://localhost:3000/api/posts", {
      title: title.value,
      content: content.value
    });

    title.value = "";
    content.value = "";
    alert("등록되었습니다.");
    router.push("/posts");
  } catch (error) {
    console.error(error);
    errorMessage.value = "등록 중 오류가 발생했습니다.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div>
    <h1>게시글 등록</h1>

    <div>
      <input v-model="title" type="text" placeholder="제목" />
    </div>

    <div>
      <textarea v-model="content" placeholder="내용"></textarea>
    </div>

    <p v-if="errorMessage">{{ errorMessage }}</p>

    <button @click="submitPost" :disabled="loading">
      {{ loading ? "등록 중..." : "등록" }}
    </button>
  </div>
</template>