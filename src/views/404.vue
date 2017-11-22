<template>
    <div>
        <mz-head></mz-head>
        <p class="notfound">404</p>
        <mz-foot></mz-foot>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {}
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/base";
    .notfound{
        height: 500px;
        line-height: 500px;
        text-align: center;
    }
</style>