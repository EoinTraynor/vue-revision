<template>
    <div v-theme:column="'narrow'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <div v-for="blog in blogs" class="single-blog">
            <h2 v-rainbow>{{ blog.title | to-uppercase}}</h2>
            <article>{{ blog.body | snippit }}</article>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blogs: []
    };
  },
  methods: {},
  created() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then(data => {
      this.blogs = data.data.slice(0, 10);
    });
  }
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
