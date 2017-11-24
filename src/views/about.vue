<template>
    <div>
        <mz-head></mz-head>
        <div class="about media">
            <div class="banner">
                <div>
                    <h2>全国最大的互联网接入平台</h2>
                    <p>广州美正在线网络科技有限公司由中国最具影响力的中高端户外媒体运营商之一——航美集团控股，是中国专业运营高铁列车Wi-Fi、普速列车Wi-Fi媒体的互联网传播机构。</p>
                </div>
            </div>
            <div class="main">
                
                <div class="road-map" id="road-map"></div>
                <div class="road-circle" id="road-circle"></div>
                
                <div class="more">
                    <h3>连接<em>160+</em>个城市</h3>
                    <p>北京、上海、广州、深圳、杭州、成都、南京、青岛、武汉、济南、哈尔滨、<br/>郑州、呼和浩特、厦门、南宁…</p>
                    <h3>覆盖沿海发达城市<em>90%</em>铁路线路</h3>
                    <h3>客流量超过<em>18亿</em>人次/年</h3>
                    <h3><em>500万+</em>人次/日</h3>
                    <h3><em>1700万+</em>车次/日</h3>
                    <h3>超过<em>22000</em>节车厢开通了上网服务</h3>
                </div>
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
            return {}
        },
        mounted(){
            this.$nextTick(()=>{
                this.drawCircle();
                new EMap({id:'road-map',title:'美正普速WiFi覆盖全国十大路局'});
            }); 
        },
        methods: {
            drawCircle(){
                var circle = new echarts.init(document.getElementById("road-circle"));
                var option = {
                    title: {
                        text: '覆盖率',
                        top: "39%",
                        right: 5,
                        textStyle: {
                            color: '#282828',
                            fontWeight: 'normal',
                            fontSize: 18,
                            textShadowOffsetY: 10
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: '{b}: {c}%'
                    },
                    textStyle: {
                        fontSize: 16
                    },
                    legend: {
                        top: 'middle',
                        left: 'right',
                        data: ['美正','其他'],
                        orient: 'vertical'
                    },
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
                circle.setOption(option);
                window.addEventListener('resize',()=>{
                    circle.resize();
                },false);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/about";
</style>