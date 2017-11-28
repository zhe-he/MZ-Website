<template>
    <header :class="head==1?'media':'mz-head-warp media'">
        <nav v-fixed class="mz-head">
            <div>
                <a @click="to('home')" href="javascript:;"></a>
                <ul :class="menuStatus?'active':''">
                    <li @click="to('home')">首页</li>
                    <li @click="to('connect')">商务合作</li>
                    <li @click="to('about')">关于我们</li>
                </ul>
                <div class="mz-head-mask"></div>
                <a :class="menuStatus?'mz-head-close':''" @click="setMenu" href="javascript:;"></a>
            </div>
        </nav>
    </header>
</template>

<script type="text/javascript">
    import {mapState,mapMutations} from 'vuex';
    export default {
        data(){
            return {
                menuStatus: false,
                lastStatus: 0
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
            ...mapMutations(["setHead"]),
            to(name){
                this.menuStatus = false;
                window.scrollTo(0,0);
                this.$router.push({name});
            },
            setMenu(){
                // 每次点击都设置头部为白色背景
                // 二次点击判断上次是否为透明背景
                if (!this.menuStatus) {
                    this.lastStatus = this.head;
                    this.setHead(2);
                }else{
                    if (this.lastStatus == 1) {
                        this.setHead(1);
                    }
                }
                this.menuStatus = !this.menuStatus;

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
        .mz-head{
            > div > a{
               &:first-child{
                    background-image: url(../../images/static/logo2.png);
                } 
            }
            li{
                color: $fbg;
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
        > div{
            position: relative;
            width: $mwidth;
            margin: 0 auto;
            > a{
                &:first-child{
                    position: absolute;
                    top: 12px;
                    left: 33px;
                    width: 120px;      
                    height: 55px;
                    background: url(../../images/static/logo.png) no-repeat;
                    background-size: 100% 100%; 
                }
            }
        }
        &.active{
            position: fixed;
            top: 0;
            left: 0;
            border-bottom-color: $line_light2;
            background-color: $bbg;
            ul li{
                color: $fbg;
            }
            >div > a{
                &:first-child{
                    background-image: url(../../images/static/logo2.png);
                }
            }
        }

        ul{
            display: flex;
            justify-content: flex-end;
            li{
                width: 100px;
                height: 80px;
                line-height: 80px;
                margin-right: 60px;
                text-align: center;
                font-size: 16px;
                color: #fff;
                cursor: pointer;
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