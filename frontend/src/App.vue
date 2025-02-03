<template>

  <div id="app">
    <div class="container">
      <BlogPosts />
    </div>
  </div>
  
</template>

<script>

import BlogPosts from "./components/BlogPosts.vue";

export default {
  name: "App",
  components: {
    BlogPosts,
  },
};

</script>

<style>

body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f7fc;
  color: #333;
}

h1, h2 {
  font-family: 'Arial', sans-serif;
  font-weight: bold;
}

.container {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

#app {
  background-color: #ffffff;
  min-height: 100vh;
}

@media (max-width: 768px) {
  .container {
    width: 95%;
    padding: 10px;
  }

  .form-input,
  .form-textarea {
    font-size: 14px;
  }

  .form-button {
    font-size: 14px;
    padding: 10px 15px;
  }

  .post-card {
    padding: 15px;
  }

  .post-list {
    gap: 15px;
  }
}

</style>
