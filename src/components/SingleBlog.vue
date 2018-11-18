<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.body }}</article>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  async mounted() {
    const respose = await axios.get(`http://jsonplaceholder.typicode.com/posts/${this.id}`);
    this.blog = respose.data;
  },
}
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>
