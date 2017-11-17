<template>
    <nav class="mz-head">
        <ul>
            <router-link tag="li" to="/"><img src="/images/static/logo.png" alt="" /></router-link>
            <router-link tag="li" exact to="/">首页</router-link>
            <router-link tag="li" to="/connect">商务合作</router-link>
            <router-link tag="li" to="/about">关于我们</router-link>
        </ul>
    </nav>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {}
        }
    }
</script>

<style lang="scss">
    @import "../styles/base";
    .mz-head{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 90px;

        ul{
            position: relative;
            display: flex;
            width: $mwidth;
            justify-content: flex-end;
            
            li{
                width: 122px;
                height: 90px;
                line-height: 90px;
                margin-right: 60px;
                text-align: center;
                font-size: 20px;
                color: #fff;
                cursor: pointer;
                &:first-child{
                    position: absolute;
                    top: 11px;
                    left: 46px;
                    &,img{
                        width: 143px;
                    }
                }
                &:last-child{
                    margin-right: 0;
                }
            }
        }
    }
</style>