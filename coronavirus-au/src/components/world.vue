<template>
  <div>
    <h2>全球最新疫情信息</h2>
    <div align="center">
      <label for="countryName">Enter a country name:</label>
      <input type="text" size="40" id="countryName" placeholder="China" v-model.lazy="countryName" />
      <button v-on:click="getData" class="btn btn-primary">search</button>
      <p>请输入某个国家的英文名，不支持中文搜索 比如：china, australia, italy, usa, uk 不区分大小写</p>

      <table align="center">
        <thead>
          <tr>
            <th>最近更新时间(24小时制)</th>
            <th>国家</th>
            <th>确诊病例</th>
            <th>新增病例</th>
            <th>总康复人数</th>
            <th>总死亡人数</th>
            <th>总病例</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in countryData[0]" v-bind:key="index">
            <td>{{formatTime(item.record_date)}}</td>
            <td>{{item.country_name}}</td>
            <td>{{item.active_cases}}</td>
            <td>{{item.new_cases}}</td>
            <td>{{item.total_recovered}}</td>
            <td>{{item.total_deaths}}</td>
            <td>{{item.total_cases}}</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <br />
      <br />

      <h2>世界前20 目前确诊病例最多的国家</h2>
      
       <div class="container">
      <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
      </div>

      <!-- <table align="center">
        <thead>
          <tr>
            <th>国家</th>
            <th>确诊人数</th>
            <th>总案例</th>
          </tr>
          <tr v-for="(item,index) in worldData" :key="index">
            <th>{{item.country_name}}</th>
            <td>{{item.active_cases}}</td>
            <td>{{item.cases}}</td>
          </tr>
        </thead>
        
      </table> -->
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div class="container">
        <div class="card">
          <div class="card-body text-center">
            <img src="../assets/wechatSmall.png" alt="healthyStyle.png" />
            <h5 class="card-title"></h5>
            <p class="card-text">if you get gains, please reward the author with grains.</p>
            <a href="https://forfun.link/contact-us/" class="btn btn-primary">给我留言</a>
          </div>
        </div>
      </div>
    </div>

    <!-- <highcharts :constructor-type="'mapChart'" :options="mapOptions" class="map"></highcharts> -->
  </div>
</template>

<script>
const axios = require("axios");
import Vue from "vue";
import Highcharts from "highcharts";
export default {
  name: "world",
  data() {
    return {
      countryName: "",
      countryData: [],
      worldData: []
    };
  },
  mounted: function() {
    this.getAllWorldData();
    
  },
  methods: {
    getData() {
      axios({
        method: "GET",
        url:
          "https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/latest_stat_by_country_name.php",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "coronavirus-monitor-v2.p.rapidapi.com",
          "x-rapidapi-key": "888a155a1cmsha3351122ec919afp1cf065jsnf07264f06624"
        },
        params: {
          country: `${this.countryName}`
        }
      })
        .then(response => {
          console.log("countryname:getDate");
          // console.log(response)
          if (response.status == 200) {
            // console.log(response.data.latest_stat_by_country);
            // console.log(response.data.latest_stat_by_country[0]);

            let data = JSON.parse(
              JSON.stringify(response.data.latest_stat_by_country)
            ); //object

          //  console.log(data);

            Vue.set(this.countryData, 0, data);
          }

          //console.log(this.countryData);

          //2.convert to Json object.

          // //console.log("response:"+response.request.response)

          // let obj = myObject.latest_stat_by_country;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getAllWorldData() {
      axios({
        method: "GET",
        url:
          "https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/cases_by_country.php",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "coronavirus-monitor-v2.p.rapidapi.com",
          "x-rapidapi-key": "888a155a1cmsha3351122ec919afp1cf065jsnf07264f06624"
        }
      })
        .then(response => {
         // console.log(response.data.countries_stat);

          response.data.countries_stat.sort(function(a, b) {
            let ac = a.active_cases.replace(/,/g, "");
            let bc = b.active_cases.replace(/,/g, "");
            return bc - ac;
          });
         // console.log(response.data.countries_stat);

          this.worldData = response.data.countries_stat.slice(0, 20);
         // console.log(this.worldData);
          this.init(this.worldData);
        })
        .catch(error => {
          console.log(error);
        });
    },
    formatTime(value) {
      let arr = value.split(" ");
      let year = arr[0];
      let time = arr[1]; //time with millisecond
      let timeInt = time.split(".")[0]; //time without millisecond

      // console.log( timeInt)
      // console.log( year)
      value = year + " " + timeInt;
      return value;
    },
    init(worldData) {
    let chart  = Highcharts.chart("container", {
        chart: {
          type: "column",
          inverted: true
        },
        title: {
          text: ``
        },
        subtitle: {
          text: ""
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
            ]
           // console.log(worldData[0].country_name)

            for(let i = 0;i<20;i++)   //世界前20
            {
              let name = worldData[i].country_name;
             let y =  parseInt( worldData[i].active_cases.replace(/,/g, ""));
              dataArr.push({name,y})
            }
        
        chart.series[0].setData(dataArr);
     // chart.series[0].data = dataArr;

    }
  }
};
</script>
 <style scoped>
.map {
  min-height: 500px;
}
h2 {
  padding: 15px 0px;
  text-align: center;
}

table {
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
}
th,
td {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}

th {
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
}
</style>