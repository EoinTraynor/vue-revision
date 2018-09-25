<template>
    <div>
      <keep-alive>
        <component v-bind:is="showComponent"></component>
      </keep-alive>
      <button v-on:click="showComponent='formOne'">Form One</button>
      <button v-on:click="showComponent='formTwo'">Form Two</button>
    </div>
</template>

<script>
// Imports
import formOne from "./components/formOne.vue";
import formTwo from "./components/formTwo.vue";
export default {
  components: {
    formOne,
    formTwo,
  },
  data() {
    return {
      showComponent: 'formTwo'
    };
  },
  methods: {
    handleSubmit() {
      console.warn("handleSubmit");
    }
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
