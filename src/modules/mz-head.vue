<template>
    <header :class="head==1?'media':'mz-head-warp media'">
        <nav v-fixed class="mz-head">
            <ul>
                <li @click="to('home')"></li>
                <li @click="to('home')">首页</li>
                <li @click="to('connect')">商务合作</li>
                <li @click="to('about')">关于我们</li>
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
        },
        methods:{
            to(name){
                window.scrollTo(0,0);
                this.$router.push({name});
            }
        }
    }
</script>

<style lang="scss">
    @import "../styles/base";
    .mz-head-warp{
        height: 80px;
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
        height: 80px;
        border-bottom: 1px solid transparent;
        transition: 1s;
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
                height: 80px;
                line-height: 80px;
                margin-right: 60px;
                text-align: center;
                font-size: 18px;
                color: #fff;
                cursor: pointer;
                &:first-child{
                    position: absolute;
                    top: 12px;
                    left: 46px;
                    width: 120px;      
                    height: 55px;
                    background: url(../../images/static/logo.png) no-repeat;
                    background-size: 100% 100%;          
                }
                &:last-child{
                    margin-right: 0;
                }
                &:hover{
                    color: $color_orange2;
                }
            }
        }
    }

</style>