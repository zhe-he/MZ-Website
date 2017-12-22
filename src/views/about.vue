<template>
    <div>
        <mz-head></mz-head>
        <div class="about media">
            <div class="banner">
                <div>
                    <h2>全国最大的互联网接入平台</h2>
                    <p>广州美正在线网络科技有限公司集资源、技术、传媒为一体，由中国最具影响力的中高端户外媒体运营商之一——航美在线集团控股，是中国专业运营高铁列车Wi-Fi、普速列车Wi-Fi媒体的综合性科技公司。</p>
                    <p>美正在线通过整合客运列车资源、通讯网络、娱乐内容等，为用户提供出行娱乐服务解决方案 ，打造中国列车出行领域的超级平台；为客户提供精准营销方案，打造列车出行场景移动终端用户分发平台。</p>
                    <p>美正在线现已签约十大铁路局，拥有65%的市场占有率，年覆盖十亿以上出行人次。</p>
                </div>
            </div>
            <div class="main">
                <div>
                    <p class="main-mobile">广州美正在线网络科技有限公司集资源、技术、传媒为一体，由中国最具影响力的中高端户外媒体运营商之一——航美在线集团控股，是中国专业运营高铁列车Wi-Fi、普速列车Wi-Fi媒体的综合性科技公司。</p>
                    <p class="main-mobile">美正在线通过整合客运列车资源、通讯网络、娱乐内容等，为用户提供出行娱乐服务解决方案 ，打造中国列车出行领域的超级平台；为客户提供精准营销方案，打造列车出行场景移动终端用户分发平台。</p>
                    <p class="main-mobile">美正在线现已签约十大铁路局，拥有65%的市场占有率，年覆盖十亿以上出行人次。</p>
                    <div class="road-map" id="road-map"></div>
                    <div class="road-circle" id="road-circle"></div>
                </div>
            </div>
             
            <div ref="more" class="more media_more">
                <h3>连接<em>160+</em>个城市</h3>
                <div>
                    <p>北京、上海、广州、深圳、杭州、成都、南京、青岛、武汉、济南、哈尔滨、<br/>郑州、呼和浩特、厦门、南宁…</p>
                    <p>北京、上海、广州、深圳、杭州、成都、南京、青岛、<br/>武汉、济南、哈尔滨、郑州、呼和浩特、厦门、南宁…</p>
                </div>
                <h3>覆盖沿海发达城市<em>90%</em>铁路线路</h3>
                <h3>客流量超过<em>18亿</em>人次/年</h3>
                <h3><em>500万+</em>人次/日</h3>
                <h3><em>1700万+</em>车次/日</h3>
                <h3>超过<em>22000</em>节车厢开通了上网服务</h3>
            </div>
            
            <div class="end">
                <h3>美正在线列车Wi-Fi项目</h3>
                <p>诚邀您的合作</p>
            </div>
        </div>
        <mz-foot></mz-foot>
    </div>
</template>

<script type="text/javascript">
    import EMap from '../libs/eMap';
    import echarts from 'echarts';
    
    export default {
        data(){
            return {
                option: {}
            }
        },
        mounted(){
            this.getOption();
            this.$nextTick(()=>{
                this.drawCircle();
                new EMap({id:'road-map',title:'美正普速WiFi覆盖全国十大路局'});
                this.scroll();
            }); 
        },
        methods: {
            drawCircle(){
                var circle = new echarts.init(document.getElementById("road-circle"));
                circle.setOption(this.option);
                window.addEventListener('resize',()=>{
                    this.getOption();
                    circle.setOption(this.option);
                    circle.resize();
                },false);
            },
            getOption(){
                var isMini = window.innerWidth <= 767;
                var legend = {
                    top: 'middle',
                    left: 'right',
                    data: ['美正','其他'],
                    orient: 'vertical'
                };
                var title = {
                    text: '覆盖率',
                    top: "39%",
                    right: 5,
                    textStyle: {
                        color: '#282828',
                        fontWeight: 'normal',
                        fontSize: 18,
                        textShadowOffsetY: 10
                    }
                }
                if (isMini) {
                    title.text += ':';
                    title.bottom = 20;
                    title.left = "20%";
                    delete title.top;
                    delete title.right;
                    title.textStyle.fontSize = 16;

                    legend.bottom = 20;
                    legend.left = "40%";
                    legend.orient = 'horizontal';
                    delete legend.top;
                }
                this.option = {
                    title,
                    tooltip : {
                        trigger: 'item',
                        formatter: '{b}: {c}%'
                    },
                    textStyle: {
                        fontSize: isMini?12:16
                    },
                    legend,
                    color: ['#fc6719','#fec500'],
                    series : [
                        {
                            name: "覆盖率",
                            type: 'pie',
                            selectedMode: 'single',
                            radius : [0, '65%'],
                            label: {
                                normal: {
                                    formatter: '{d}%',
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:65, name: '美正'},
                                {value:35, name: '其他',selected: true}
                            ]
                        }
                    ]
                };
            },
            scroll(){
                var _this = this;
                window.addEventListener('scroll',fn,false);
                function fn(){
                    if(!_this.$refs.more){ return false;}
                    var t = _this.$refs.more.getBoundingClientRect().top;
                    var h = _this.$refs.more.offsetHeight;
                    var H = window.innerHeight;
                    if(t < Math.min(h,H)){
                        _this.$refs.more.className = 'more media_more animation';
                        window.removeEventListener('scroll',fn);
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/about";
</style>