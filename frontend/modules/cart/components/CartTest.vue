<template>
    <button @click="showAlert">Hello world</button>
</template>

<script>
    export default {
        methods: {
            showAlert() {
                // console.log(this.$swal)
                // this.$swal('Hello Vue world!!!');
                this.$cartalert.addProductSuccess()
            },
        },
    };
</script>