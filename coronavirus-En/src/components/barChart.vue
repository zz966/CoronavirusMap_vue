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
          text: `${this.reportTime} COVID-19 current case number - daily report`
        },
        subtitle: {
          text: "updated every 24 hours"
        },
        xAxis: {
          type: "category"
        },
        yAxis: {
          title: {
            text: "confirmed cases"
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
            name: "confirmed cases",
            colorByPoint: true,
            data: [
            ]
          }
        ]
      });

        let dataArr =  [
              {
                name: "Victoria",
                y: 1
              },
              {
                name: "New South Wales",
                y: 1
              },
              {
                name: "Tasmania",
                y: 1
              },
              {
                name: "Queensland",
                y: 1
              },
              {
                name: "South Australia",
                y: 1
              },
              {
                name: "Western Australia",
                y: 1
              },
              {
                name: "Northern Territory",
                y: 1
              },
              {
                name: "Australian Capital Territory",
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