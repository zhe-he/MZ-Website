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
                <p class="dot2">··········<router-link tag="a" to="/about">更多 &gt;</router-link>··········</p>
                <p class="dot">....................</p>
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
                <a @click="to('about')" href="javascript:;" class="a_c more">查看更多</a>
            </div>
            <div class="surf">
                <h2>火车上网简单高效</h2>
                <p class="dot">....................</p>
                <ul>
                    <li>
                        <i></i>
                        <div>
                            <p>免费</p>
                            <p>火车上免费使用无线Wi-Fi</p>    
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div>
                            <p>体验流畅</p>
                            <p>连接Wi-Fi到上网一次性完成</p>
                        </div>
                        
                    </li>
                    <li>
                        <i></i>
                        <div>
                            <p>闭环</p>
                            <p>上车连接，车上全程使用</p>
                        </div>
                    </li>
                </ul>
                <div class="surf-img"><img src="images/static/step.jpg" alt="" /></div>
            </div>
            <div class="advantage">
                <h2>场景特点优势</h2>
                <p class="dot">....................</p>
                <ul>
                    <li v-for="item in advantage">
                        <img :src="item.img" alt="" />
                        <div><h3>{{item.p}}</h3></div>
                    </li>
                </ul>
            </div>
            <div class="group">
                <h2>产品受众群体精准</h2>
                <p class="dot">....................</p>
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
                <p class="dot">....................</p>
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
                <p class="dot">....................</p>

                <aside v-for="item in connect">
                    <h4>{{item.title}}</h4>
                    <ul :class="['clearfix',item.styleClass]">
                        <li :class="list.mobile_no?'mobile_no':''" v-for="list in item.list">
                            <!--<a :href="list.link"></a>-->
                            <img :src="list.img" alt="">
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
        <mz-foot></mz-foot>
         <!-- 声明 -->
         <div class="select-overlay" v-show="isShowSm">
          <div class="content">
            <a href="javascript:;" class="close-sm" @click="close">关闭 X</a>
            <h3><span>严正声明</span></h3>
            <p>
                <span class="orange">“往返WiFi”</span>业务为航美在线网络科技集团有限公司旗下广州美正在线网络科技有限公司（以下简称“我司”）所有，其知识产权及相关权利均属于我司。关于近期市场上出现的销售铁路局往返WiFi资源的情况，我公司严正声明如下：<br />
                1. 截止目前，我司未针对铁路<span class="orange">“往返WiFi”十个铁路局的WIFI运营权</span>进行对外授权，我司以外的任何主体实施的销售该资源的行为皆不具有合法授权；由此造成的他人财产损失及权益损害，我司不承担任何责任。<br />
                2. 不具有代理资格、非法销售我司资源的行为已严重损害了我司的合法权益，我司将根据保护自身权益的需求，保留随时诉诸法律的权利。
            </p>
            <br />
            <p style="text-align: right;">
               广州美正在线网络科技有限公司<br />
               2018年4月12日
            </p>
          </div>
         </div> 
    </div>
</template>

<script type="text/javascript">
    import { advantage,group,cooperation,connect } from "../data/home";
    const isShowSm = !window.sessionStorage.getItem('mz_sm');
    export default {
        data(){
            return {
                advantage,
                group,
                cooperation,
                connect,
                isShowSm
            }
        },
        methods: {
            to(name){
                window.scrollTo(0,0);
                this.$router.push({name});
            },
            close() {
                window.sessionStorage.setItem('mz_sm',1);
                this.isShowSm = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/home";
</style>