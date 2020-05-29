<template>
  <div class="cloudhost-box">
    <div id="mapContent"/>
  </div>
</template>


<script>
  import echarts from "echarts";
  import {mapJson,geoCoordMap} from './chinaJSON.js';
  const convertData = (data) => {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          value: geoCoord.concat(data[i].value),
          name: data[i].name,
        });
      }
    }
    return res;
  };
  export default {
    data(){
      return {
        loading: true,
        loaded:false,
        vmData:[
          {name: '云浮', value: 24,num:10},
          {name: '烟台', value: 28,num:5},
          {name: '昆山', value: 33,num:8},
          {name: '泰州', value: 36,num:10},
          {name: '广州', value: 38,num:8},
          {name: '深圳', value: 41,num:10},
          {name: '三亚', value: 54,num:12},
          {name: '成都', value: 58,num:20},
          {name: '重庆', value: 66,num:5},
          {name: '大庆', value: 279,num:10}
        ]
      }
    },
    mounted(){
      console.log(this, '---------')
      this.initMapDidMount();
    },
    methods: {
      initMapDidMount(){
        echarts.registerMap('china', mapJson); // 注册地图
        var mapChart = echarts.init(document.getElementById('mapContent'));
        var option = {
          backgroundColor: '#404a59',
          title: {
            text: '分布',
            // subtext: '点击进入',
            // sublink: 'http://www.baidu.com/',
            left: 'center',
            textStyle: {
              color: '#fff'
            }
          },
          tooltip : {
            trigger: 'item',
            formatter: function (params) {            //格式化鼠标指到点上的弹窗返回的数据格式
              return params.name + ' : ' + params.value[2];
            }
          },
          geo: {                  //地里坐标系组件（相当于每个省块）
            map: 'china',
            roam:true,           //是否开启缩放
            label: {
              emphasis: {                //鼠标划到后弹出的文字 显示省份
                color: '#FF0000',       //高亮背景色
                show: true,             //是否高亮显示
                fontSize:12             //字体大小
              }
            },
            itemStyle: {                  //坐标块本身
              normal: {                  //坐标块默认样式控制
                areaColor: '#323c48',   //坐标块儿颜色
                borderColor: '#111'
              },
              emphasis: {
                areaColor: '#79FF79'    //放坐标块儿上，块儿颜色
              }
            }
          },
          series: [
            {
              name: '信息',      // series名称
              type: 'effectScatter',        // series图表类型
              effectType: 'ripple',         // 圆点闪烁样式，目前只支持ripple波纹式
              coordinateSystem: 'geo',      // series坐标系类型
              data:convertData(this.vmData),// series数据内容
              showEffectOn: 'emphasis',       //配置何时显示特效 render 一直显示，emphasis放上去显示
              symbolSize: function (val) {
                return val[2] / 10;
              },
              rippleEffect: {               // ripple的样式控制
                brushType: 'stroke',
                color: '#28FF28',
              },
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true      //显示位置信息，
                }
              },

              itemStyle: {                  //散点本身显示控制
                normal: {
                  color: '#28FF28',
                  shadowBlur: 10,
                  shadowColor: '#28FF28'
                }
              },
              zlevel: 1
            }
          ],
          symbolSize: 12,
        }
        if (option && typeof option === "object") {
          mapChart.setOption(option);
        }
      },
    }
  }
</script>

<style lang="less" scoped>
  .cloudhost-box{
    width: 100%;
    height: 100%;
    #mapContent {
      width: 1100px;
      height: 550px;
      mergeLeft:0px;
    }
  }
</style>

