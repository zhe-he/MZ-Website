<template>
    <div>
        <mz-head></mz-head>
        <keep-alive v-if="$route.meta.keepAlive">
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <mz-foot></mz-foot>
    </div>
</template>

<style lang="scss">
    @import "./styles/reset";
</style>
<script type="text/javascript">
    export default {
        data (){
            return {

            }
        }
    }
</script>