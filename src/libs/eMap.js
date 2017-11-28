/* 
 * echarts map
 */
import echarts from "echarts";
import "echarts/map/js/china";
import city from "../data/city";
import trainXl from "../data/train_xl";
import {clone} from "../modules/method";

class EMap{

    domBox
    domList
    myChart
    title
    geoCoordMap = {}
    AllData = []
    Data = []
    data = []
    option = {}

    constructor({id,title}){
        this.domBox = document.getElementById(id);
        this.title = title;
        this.myChart = echarts.init(this.domBox); 
        this.setList();
        this.setData();
        this.setOption();
        this.init();
    }
    setList(){
        var style = document.createElement('style');
        this.domList = document.createElement('div');
        this.domList.className = 'eMap-list';
        this.domBox.appendChild(this.domList);
        this.domList.innerHTML = `<ul>
            <li>北京</li>
            <li>上海</li>
            <li>济南</li>
            <li>乌鲁木齐</li>
            <li>哈尔滨</li>
            <li>呼和浩特</li>
            <li>郑州</li>
            <li>南昌</li>
            <li>南宁</li>
            <li>兰州</li></ul>
        `;
        style.innerHTML = `
            .eMap-list{
                position: absolute;
                top: 50%;
                right: 0;
                margin-top: -211px;
                border: 1px solid #f1f1f1;
                padding: 10px 40px;
                color: #282828;
                font-size: 16px;
                line-height: 40px;
            }
            @media only screen and (max-width: 767px){
                .eMap-list{
                    position: relative;
                    top: 0;
                    margin-top: -50px;
                    border: 1px solid #fbf1c2;
                    padding: 4px;
                }
                .eMap-list ul{
                    border: 1px solid #f1f1f1;
                    overflow: hidden;
                    padding: 6px 0;
                }
                .eMap-list li{
                    float: left;
                    width: 20%;
                    text-align: center;
                    font-size: 12px;
                    line-height: 2;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setData(){
        city.forEach(item=>{
            this.geoCoordMap[item.city] = [parseFloat(item.longitude),parseFloat(item.latitude)];
            this.data.push(item.city);
        });

        this.data = this.data.slice(0,300);

        trainXl.forEach(item=>{
            this.AllData.push([{name:item.startCity}, {name:item.endCity,value:90}, 
                {startStation:item.startStation,endStation:item.endStation}]);
        });
                
        this.Data = clone(this.AllData).slice(0,20);
    }
    convertData(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var fromName = data[i][0].name;
            var toName = data[i][1].name;
            var fromCoord = this.geoCoordMap[fromName];
            var toCoord = this.geoCoordMap[toName];
            if (fromCoord && toCoord) {
                res.push({
                    fromName,
                    toName,
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    }
    convertData2(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var name = data[i].name;
            var geoCoord = this.geoCoordMap[name];
            if (geoCoord) {
                res.push({
                    name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    }
    init(){

        var max = this.AllData.length;
        var start = 0;
        setInterval( ()=>{
            start += 10;
            if (start + 20 > max) {
                start = 0;
            }
            this.Data = clone(this.AllData).slice(start,start+20);
            this.option.series[0].data = this.convertData(this.Data);
            this.option.series[1].data = this.convertData(this.Data);
            this.option.series[2].data = this.Data.map(  dataItem => {
                if(this.geoCoordMap[dataItem[1].name] != undefined){
                    return {
                        name: dataItem[1].name,
                        value: this.geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                }
            })
            this.myChart.setOption(this.option);
        },5000);
        this.myChart.setOption(this.option);

        window.addEventListener('resize',()=>{
            this.setOption();
            // 此处最多需要5秒更改，如需立即更改，打开158行
            // this.myChart.setOption(this.option);
            this.myChart.resize();
        },false);
    }
    setOption(){  
        var color = ['#369cf4', '#ffa022', '#46bee9'];
        var series = [];
        var isMini = window.innerWidth <= 767; 
        series.push(
            {
                    type: 'lines',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: '#fdd823',
                        symbolSize: 5
                    },
                    lineStyle: {
                        normal: {
                            color: color[0],
                            width: 0,
                            curveness: 0.2
                        }
                    },
                data: this.convertData(this.Data)
            },{
                type: 'lines',
                zlevel: 2,
                lineStyle: {
                    normal: {
                        color: '#fa8100',
                        width: isMini?1:2,
                        opacity: 0.9,
                        curveness: 0.2
                    }
                },
                data: this.convertData(this.Data)
            },{
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 10,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: 1,
                itemStyle: {
                    normal: {
                        color: '#666666'
                    }
                },
                data: this.Data.map( dataItem => {
                    if(this.geoCoordMap[dataItem[1].name] != undefined){
                        return {
                            name: dataItem[1].name,
                            value: this.geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    }
                })
            },{
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 10,
                data: this.convertData2(this.data),
                symbolSize: 3,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff9527'
                    }
                }
            }
        );
        this.option = {
            title : {
                text: this.title,
                textStyle: {
                    fontSize: isMini?16:30,
                    color: '#475072',
                    fontWeight: 'normal'
                },
                left: 'center',
                top: isMini?20:40
            },
            textStyle:{
                fontSize: isMini?8:12
            },
            tooltip : {
                show: true,
                trigger: 'item',
            },
            geo: {
                map: 'china',
                label: { emphasis: { show: false } },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: '#faf7eb',
                        borderColor: '#ff9964'
                    },
                    emphasis: {
                        areaColor: '#efdf9d'
                    }
                }
            },
            series: series
        };
    }
}

export default EMap;