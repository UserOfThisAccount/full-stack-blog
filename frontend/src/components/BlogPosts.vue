<template>

  <div class="blog-posts">
    <h1>Blog Posts</h1>

    <!-- new post form -->
    <div class="form-container">
      <h2>Create New Post</h2>
      <form @submit.prevent="createPost">
        <input
          type="text"
          v-model="newPost.title"
          placeholder="Enter post title"
          required
          class="form-input"
        />
        <textarea
          v-model="newPost.content"
          placeholder="Write your post content here"
          required
          class="form-textarea"
        ></textarea>
        <button type="submit" class="form-button">Create Post</button>
      </form>
    </div>

    <!-- displaying posts -->
    <div class="post-list">
      <div v-for="post in posts" :key="post.id" class="post-card">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <span class="post-date">{{ post.created_at }}</span>
      </div>
    </div>
  </div>

</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      newPost: {
        title: "",
        content: "",
      },
    };
  },
  mounted() {
    this.fetchPosts();
  },

  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get("http://localhost:3001/api/posts");
        this.posts = response.data;
      } catch (error) {
        console.error("There was an error fetching posts:", error);
      }
    },
    async createPost() {
      try {
        const response = await axios.post("http://localhost:3001/api/posts", this.newPost);
        this.posts.push(response.data); // add new post to list
        this.newPost.title = "";
        this.newPost.content = "";
      } catch (error) {
        console.error("There was an error creating the post:", error);
        alert("There was an error creating the post: " + error.message);
      }
    },
  },
};

</script>

<style scoped>

.blog-posts {
  margin-top: 20px;
}

.form-container {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 40px;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #2d3748;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.form-textarea {
  height: 200px;
}

.form-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.form-button:hover {
  background-color: #45a049;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.post-card h2 {
  font-size: 22px;
  margin-bottom: 10px;
  color: #2d3748;
}

.post-card p {
  font-size: 16px;
  color: #4a5568;
}

.post-date {
  font-size: 14px;
  color: #a0aec0;
  margin-top: 10px;
  display: block;
}

</style>
