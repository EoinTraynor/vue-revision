<template>
    <div>
        <h1>Please fill out our form</h1>
        <form>
            <div class="form-header">
                <slot name="form-header"></slot>
            </div>
            <div class="form-fields">
                <slot name="form-fields"></slot>
            </div>
            <div class="form-controls">
                <slot name="form-controls"></slot>
            </div>
            <div class="form-links">
                <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                    <li><a href="#">Link 4</a></li>                    
                </ul>
            </div>
        </form>        
    </div>
</template>

<script>
export default {
    
}
</script>
