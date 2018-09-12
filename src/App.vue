<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Form Header</h3>
                <p>Info about the form</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="name" required>
                <input type="password" placeholder="password" required>                
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Submit</button>
            </div>
        </form-helper>
    </div>
</template>

<script>
// Imports
import FormHelper from './components/FormHelper.vue';
export default {
    components: {
        FormHelper,
    },
    data () {
        return {
            title: 'I am a slot title'
        }
    },
    methods: {
        handleSubmit() {
            console.warn("handleSubmit");
        }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
