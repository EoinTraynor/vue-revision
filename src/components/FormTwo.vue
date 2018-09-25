<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Contact Form</h3>
                <p>Contact us</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="name" required>
                <label for="message">Message:</label>
                <textarea name="message" id="contact-textarea" cols="30" rows="10"></textarea>
            </div>
            <div slot="form-controls">
                <!-- <button v-on:click="handleSubmit">Submit</button> -->
            </div>
        </form-helper>
    </div>
</template>

<script>
import FormHelper from './FormHelper.vue';
export default {
  components: {
    FormHelper,
  }
};
</script>
