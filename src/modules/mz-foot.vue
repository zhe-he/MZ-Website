<template>
    <footer class="mz-foot media">
        <div>
            <a href="javascript:;" @click="to('home')"><img src="/images/static/logo.png" alt="" /></a>
            <ul>
                <li @click="to('about')">关于美正</li>
                <li @click="to('connect')">商务合作</li>
                <li><img src="/images/static/erweima.jpg" alt="" /></li>
            </ul>
        </div>
        <div>
            <p>copyright 2017 广州美正在线网络科技有限公司 <a target="_blank" href="http://www.miitbeian.gov.cn">粤ICP备13048187号</a></p>
        </div>
    </footer>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {}
        },
        methods: {
            to(name){
                window.scrollTo(0,0);
                this.$router.push({name});
            }
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
                margin: 0 auto;
                padding: 40px 0 28px;
                > a{
                    position: absolute;
                    left: 33px;
                    top: 80px; 
                }
                img{
                    width: 120px;
                    display: block;
                }
                > ul{
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    padding-right: 100px;
                    li{
                        font-size: 16px;
                        color: #fff;
                        margin-right: 54px;
                        cursor: pointer;
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
                    margin: 0 auto;
                    height: 40px;
                    line-height: 40px;
                    text-align: right;
                    color: #fff;
                    font-size: 12px;
                    box-sizing: border-box;
                    padding-right: 100px;
                    a{
                        color: #fff;
                    }
                }
            }
        }
    }
</style>