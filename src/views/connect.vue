<template>
    <div>
        <mz-head></mz-head>
        <div class="connect media">
            <div class="connect-main">
                <div class="connect_l">
                    <div>
                        <h2>公众号商业推广</h2>
                        <address @click="panTo('gz')">广州市海珠区新港西路大江直街1号邦华—创社第2栋3楼</address>
                        <p>18617333013 林小姐</p>
                    </div>
                    <div>
                        <h2>商务合作推广</h2>
                        <address @click="panTo('gz')">广州市海珠区新港西路大江直街1号邦华—创社第2栋3楼</address>
                        <p>18617333013 林小姐</p>
                    </div>
                    <div>
                        <h2>美正网络科技有限公司</h2>
                        <address @click="panTo('bj')">北京市东城区东直门外大街46号天恒大厦A座15层</address>
                        <p>电话：010-84386868</p>
                    </div>
                </div>
                <div class="connect_r" id="mz-map"></div>
            </div>
        </div>
        <mz-foot></mz-foot>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                map: null,
                point: {gz:null,bj:null}
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.mapInit();
            });
        },
        methods: {
            mapInit(){
                this.map = new BMap.Map("mz-map");
                this.map.centerAndZoom(new BMap.Point(116.443572, 39.946184), 17);
                this.map.setCurrentCity("北京"); 
                this.map.enableScrollWheelZoom();
                this.map.enableContinuousZoom();         
                
                // add marker
                this.point.gz = new BMap.Point(113.318754, 23.106296);
                this.point.bj = new BMap.Point(116.443572, 39.946184);
                this.map.addOverlay(new BMap.Marker(this.point.gz)); 
                this.map.addOverlay(new BMap.Marker(this.point.bj)); 
            },
            panTo(type){
               this.point[type] && this.map.panTo(this.point[type]);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/base";
    .connect{
        background-color: $bbg;
    }
    .connect-main{
        display: flex;
        width: $mwidth;
        margin: 0 auto;
        background-color: $light_blue;
    }
    .connect_l{
        flex: 1;
        padding: 47px 30px;
        > div{
            margin-bottom: 36px;
        }
        h2{
            font-size: 30px;
            color: $color_blue;
            margin-bottom: 12px;
        }
        address,p{
            font-size: 18px;
            color: $color_base;
            line-height: 1.7;
            padding-left: 26px;
        }
        address{
            background: url(../../images/point.png) no-repeat left center;
            font-style: normal;
            cursor: pointer;
            margin-bottom: 5px;
        }
        p{
            background: url(../../images/tel.png) no-repeat left center;
        }
    }
    .connect_r{
        flex: 2;
    }
</style>