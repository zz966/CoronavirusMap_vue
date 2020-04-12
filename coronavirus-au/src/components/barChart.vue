<template>
  <div class="container">
    <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
  </div>
</template>

<script>
import Highcharts from "highcharts";

export default {
  name:'barChart',
  data() {
    return {};
  },
  props: ["reportTime", "confiredCases"],
  methods: {
    getData() {},
    init() {
    let chart  = Highcharts.chart("container", {
        chart: {
          type: "column",
          inverted: true
        },
        title: {
          text: `${this.reportTime} 澳洲各州疫情 统计数据`
        },
        subtitle: {
          text: "每24小时更新一次"
        },
        xAxis: {
          type: "category"
        },
        yAxis: {
          title: {
            text: "确诊感染人数"
          }
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: "{point.y}"
            }
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat:
            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
        },
        series: [
          {
            name: "确诊感染人数",
            colorByPoint: true,
            data: [
            ]
          }
        ]
      });

        let dataArr =  [
              {
                name: "维多利亚州",
                y: 1
              },
              {
                name: "新南威尔士州",
                y: 1
              },
              {
                name: "塔斯马尼亚",
                y: 1
              },
              {
                name: "昆士兰州",
                y: 1
              },
              {
                name: "南澳大利亚",
                y: 1
              },
              {
                name: "西澳大利亚州",
                y: 1
              },
              {
                name: "北领地",
                y: 1
              },
              {
                name: "首都地区",
                y: 1
              }
            ]

            for(let i = 0;i<8;i++)
            {
              // console.log(dataArr[i].name)
              // console.log(this.confiredCases[7-i][1]);
              dataArr[i].y = this.confiredCases[7-i][1];
            }
        chart.series[0].setData(dataArr);
     // chart.series[0].data = dataArr;

    }
  },

  mounted: function() {
    this.getData();
    this.init();
  }
};
</script>

<style scoped>
input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
#colorPicker {
  border: 0;
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
}
.numberInput {
  width: 30px;
}
</style>