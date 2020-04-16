
<template>
  <div class="container">
    <div id="basicLineContainer" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
  </div>
</template>

<script>
import Highcharts from "highcharts";
//import axios from 'axios';
export default {
  name: "basicLine",
  data() {
    return {
        cases:[],
        deaths:[]
    };
  },
  methods: {
    initChart() {
      Highcharts.chart("basicLineContainer", {
          chart:{
              type:'line'
          },
        title: {
          text: "从3月1日起疫情趋势图"
        },
        subtitle: {
          text: "每24小时更新一次"
        },
        yAxis: {
          title: {
            text: "Number of cases"
          }
        },
        xAxis: {
            title:{
                text:'时间线'
            },
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle"
        },
        plotOptions: {
            line: {
            dataLabels: {
                enabled: true
            }},
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 1
          }
        },
        series: [
          {
            name: "Total Cases",
            data: [27,30,39,52,55,60,63,76,91,107,128,128,200,250,297,377,452,568,681,791,1071,1549,1682,2044,2364,2745,3166,3635,3966,4245
            ,4557,4860,5133,5350,5548,5687,5795,5908,6013,6103,6203,6303,6313,6359,6400]
          },
        ],
        responsive: {
        rules: [{
            condition: {
                maxWidth: 9000
            },
            // chartOptions: {
            //     legend: {
            //         layout: 'horizontal',
            //         align: 'center',
            //         verticalAlign: 'bottom'
            //     }
            // }
        }]
    }
      });
    }
    ,
 
  },
  mounted() {
   // this.getTimeLineData();
    this.initChart();
  }
};
</script>




<style>
</style>