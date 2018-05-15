<template>
    <div>
        <!-- seo default img start -->
        <img src="images/static/logo2.png" style="z-index:-1;opacity:0;position:absolute;top:0;left:0" />
        <!-- seo default img end -->
        <keep-alive v-if="$route.meta.keepAlive">
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<style lang="scss">
    @import "./styles/reset";
    @import "./styles/media";
    @import "./styles/index";
</style>
<script type="text/javascript">
    export default {
        data (){
            return {

            }
        }
    }
</script>