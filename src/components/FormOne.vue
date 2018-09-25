<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Login Form</h3>
                <p>Enter username and password</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="username" required>
                <input type="password" placeholder="password" required>
            </div>
            <div slot="form-controls">
                <!-- <button v-on:click="handleSubmit">Submit</button> -->
            </div>
        </form-helper>
    </div>
</template>

<script>
import FormHelper from "./FormHelper.vue";
export default {
  components: {
    FormHelper,
  }
};
</script>
