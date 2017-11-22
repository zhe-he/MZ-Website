<template>
    <header :class="head==1?'':'mz-head-warp'">
        <nav v-fixed class="mz-head">
            <ul>
                <router-link tag="li" to="/"></router-link>
                <router-link tag="li" exact to="/">首页</router-link>
                <router-link tag="li" to="/connect">商务合作</router-link>
                <router-link tag="li" to="/about">关于我们</router-link>
            </ul>
        </nav>
    </header>
</template>

<script type="text/javascript">
    import {mapState} from 'vuex';
    export default {
        data(){
            return {
            }
        },
        computed: mapState(["head"]),
        directives: {
            fixed: {
                bind(el){
                    window.addEventListener('scroll',()=>{
                        var h = el.offsetHeight;
                        var t = document.documentElement.scrollTop || document.body.scrollTop;
                        if (t > h) {
                            el.className = 'mz-head active';
                        }else{
                            el.className = 'mz-head';
                        }
                    },false);
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../styles/base";
    .mz-head-warp{
        height: 90px;
        border-bottom: 1px solid $line_light2;
        background-color: $bbg;
        .mz-head{
            position: relative;
        }
        .mz-head li{
            color: $fbg;
            &:first-child{
                background-image: url(../../images/static/logo2.png);
            }
        }
    }
    .mz-head{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 90px;
        border-bottom: 1px solid transparent;
        transition: 0.6s;
        &.active{
            position: fixed;
            top: 0;
            left: 0;
            border-bottom-color: $line_light2;
            background-color: $bbg;
            ul li{
                color: $fbg;
                &:first-child{
                    background-image: url(../../images/static/logo2.png);
                }
            }
        }

        ul{
            position: relative;
            display: flex;
            width: $mwidth;
            margin: 0 auto;
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
                    width: 143px;      
                    height: 66px;
                    background: url(../../images/static/logo.png) no-repeat;
                    background-size: 100% 100%;          
                }
                &:last-child{
                    margin-right: 0;
                }
                &.router-link-exact-active{
                    color: $color_orange2;
                }
            }
        }
    }

</style>