<template>
    <div>
        <mz-head></mz-head>
        <div class="home">
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
                        <div><p>160+</p></div>
                        <p>连接160+个城市</p>
                    </li>
                    <li>
                        <div><p>1700+</p></div>
                        <p>超过1700+ 车次/日</p>
                    </li>
                </ul>
            </div>
            <div class="surf">
                <h2>火车上网简单高效</h2>
                <p>····················</p>
                <ul>
                    <li>
                        <i></i>
                        <div>
                            <p>免费</p>
                            <p>火车上免费试用无限Wi-Fi</p>    
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div>
                            <p>体验流畅</p>
                            <p>连接Wi-Fi到关注一次性完成</p>
                        </div>
                        
                    </li>
                    <li>
                        <i></i>
                        <div>
                            <p>闭环</p>
                            <p>车上连接，车上使用</p>
                        </div>
                    </li>
                </ul>
                <img src="images/static/step.jpg" alt="" />
            </div>
            <div class="advantage">
                <h2>场景特点优势</h2>
                <p>····················</p>
                <ul>
                    <li v-for="item in advantage">
                        <img :src="item.img" alt="" />
                        <div><h3>{{item.p}}</h3></div>
                    </li>
                </ul>
            </div>
            <div class="group">
                <h2>产品受众群体精准</h2>
                <p>····················</p>
                <ul>
                    <li v-for="item in group">
                        <img :src="item.img" alt="" />
                        <h3>{{item.h3}}</h3>
                        <div>
                            <h3>{{item.h3}}</h3>
                            <p>{{item.p}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="cooperation">
                <h2>多元合作方式</h2>
                <p>····················</p>
                <ul>
                    <li v-for="item in cooperation">
                        <img :src="item.img" alt="">
                        <h3>{{item.h3}}</h3>
                        <p v-html="item.p"></p>
                    </li>
                </ul>
            </div>
            <div class="connect">
                <h2>合作客户</h2>
                <p>····················</p>

                <aside v-for="item in connect">
                    <h4>{{item.title}}</h4>
                    <ul>
                        <li v-for="list in item.list">
                            <a :href="list.link"></a>
                            <img :src="list.img" alt="">
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
        <mz-foot></mz-foot>
    </div>
</template>

<script type="text/javascript">
    import { advantage,group,cooperation,connect } from "../data/home";
    export default {
        data(){
            return {
                advantage,
                group,
                cooperation,
                connect
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/home";
</style>