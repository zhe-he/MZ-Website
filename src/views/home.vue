<template>
    <div>
        <div class="banner">
            <p>中国最大的</p>
            <p>铁路客运出行娱乐平台</p>
        </div>
        <div class="about">
            <h2>关于美正</h2>
            <p>··········<router-link tag="a" to="/about">更多 >></router-link>··········</p>
            <ul>
                <li>
                    <div><p>10</p></div>
                    <p>覆盖全国十大路局</p>
                </li>
                <li>
                    <div><p>160</p><p>+</p></div>
                    <p>连接160+个城市</p>
                </li>
                <li>
                    <div><p>1700</p><p>+</p></div>
                    <p>超过1700+ 车次/日</p>
                </li>
            </ul>
        </div>
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
    .banner{
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 629px;
        background: url(../../images/banner1.jpg) no-repeat center center;
        > p{
            color: #fff;
            width: 100%;
            text-align: center;
            &:nth-child(1){
                font-size: 110px;
            }
            &:nth-child(2){
                font-size: 80px;
            }
        }
    }
    .about{
        height: 682px;
        padding-top: 40px;
        background: #f8f9fb url(../../images/map.jpg) no-repeat center center;
        box-sizing: border-box;
        h2{
            color: $color_blue;
            font-size: 30px;
            line-height: 66px;
            text-align: center;
        }
        > p{
            font-size: 16px;
            line-height: 18px;
            text-align: center;
            &,a{
                color: $color_grey;
            }
            a{
                margin: 0 25px;
            }
        }
        ul{
            margin-top: 112px;
            display: flex;
            justify-content: center;
            align-items: center;
            li{
                width: 160px;
                margin-right: 184px;
                &:last-child{
                    margin-right: 0;
                }
                div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 152px;
                    height: 152px;
                    margin: 0 auto 45px;
                    border-radius: 50%;
                    background-color: $color_orange;
                    text-align: center;
                    color: #fff;
                    font-size: 68px;
                    line-height: 42px;
                }
                > p{
                    color: $color_base;
                    font-size: 18px;
                    line-height: 18px;
                    text-align: center;
                }
            }
        }
    }
</style>