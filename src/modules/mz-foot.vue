<template>
    <footer class="mz-foot">
        <div>
            <router-link tag="a" to="/"><img src="/images/static/logo.png" alt="" /></router-link>
            <ul>
                <router-link tag="li" to="/about">关于美政</router-link>
                <router-link tag="li" to="/connect">商务合作</router-link>
                <li><img src="/images/static/erweima.jpg" alt="" /></li>
            </ul>
        </div>
        <div>
            <p>copyright 2017 广州美正在线网络科技有限公司 粤ICP备13048187号</p>
        </div>
    </footer>
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
    .mz-foot{
        background-color: $fbg;
        > div{
            &:first-child{
                width: $mwidth;
                position: relative;
                padding: 40px 0 28px;
                > a{
                    position: absolute;
                    left: 33px;
                    top: 60px; 
                }
                > ul{
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    padding-right: 135px;
                    li{
                        font-size: 18px;
                        color: #fff;
                        margin-right: 54px;
                        &:last-child{
                            margin-right: 0;
                        }
                    }
                }
            }
            &:last-child{
                background-color: $fbg2;
                p{
                    width: $mwidth;
                    height: 40px;
                    line-height: 40px;
                    text-align: right;
                    color: #fff;
                }
            }
        }
    }
</style>