<template>
  <div id="add-blog">
    <h2>Add new blog post</h2>
    <form>
      <label for="blog-title">Blog Title: </label>
      <input v-model="blog.title" name="blog-title" type="text" required>
      <label for="blog-textarea">Blog Content: </label>
      <textarea v-model="blog.textArea" name="blog-textarea" id="" cols="30" rows="10"></textarea>
      <div id="checkboxes">
        <label for="ninjas">Ninjas</label>
        <input name="ninjas" type="checkbox" value="ninjas" v-model="blog.categories">
        <label for="wizards">Wizards</label>
        <input name="wizards" type="checkbox" value="wizards" v-model="blog.categories">
        <label for="dwarfs">Dwarfs</label>
        <input name="dwarfs" type="checkbox" value="dwarfs" v-model="blog.categories">
      </div>
      <label for="author">Author</label>
      <select v-model="blog.author" name="author" id="author">
        <option v-for="author in authors">{{ author }}</option>
        <!-- <option value="Mary">Mary</option>
        <option value="Dave">Dave</option> -->
      </select>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }} </p>
      <p>Blog content:</p>
      <p>{{ blog.textArea }}</p>
      <p>Blog categories:</p>
      <ul>
        <li v-for="category in blog.categories">
          {{ category }}
        </li>
      </ul>
      <p>{{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        textArea: '',
        categories: [],
        author: '',
      },
      authors: [
        'Dave',
        'Mike',
        'Susan'
      ],
    }
  },
  methods: {

  },
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
