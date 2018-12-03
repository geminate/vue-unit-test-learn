<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>{{ otherMessage }}</h2>
        <button @click="changeMessage">自增</button>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                otherMessage: 'Init'
            }
        },
        methods: {
            changeMessage() {
                this.otherMessage = this.getMessage();
            },
            async getMessage() {
                return await this.$api.testMessage({"a": "123"}).message;
            }
        },
        mounted() {
            this.otherMessage = "mounted message";
        }
    }
</script>

<style scoped lang="less">
</style>
