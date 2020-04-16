<template>
  <div>
    <h2>澳洲最新疫情信息 统计数据</h2>
    <h6>（ 自动化实时更新 ）</h6>
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
        <tr v-for="(item,index) in latest_stat_au[0]" v-bind:key="index">
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

    <highcharts :constructor-type="'mapChart'" :options="mapOptions" class="map"></highcharts>

    <h2>澳大利亚各州疫情 每日报告</h2>
       <h5>{{reportTime}}</h5>
    <table align="center">
      <thead>
        <tr>
        
          <th>维多利亚州</th>
          <th>新南威尔士州</th>
          <th>塔斯马尼亚</th>
          <th>昆士兰州</th>
          <th>南澳大利亚州</th>
          <th>西澳大利亚州</th>
          <th>北领地</th>
          <th>首都领地</th>
          <th>总案例</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            v-for="(value,key,index) in mapOptions.series[0]['data'].slice(0,8).reverse()"
            v-bind:key="index"
          >{{value[1]}}</td>
          <td>{{totalCases}}</td>
        </tr>
      </tbody>
    </table>
    <br />
    <br />
    <br />
    <br />

    <barChart v-bind:reportTime="reportTime" v-bind:confiredCases="confiredCases"></barChart>

    <br />

    <basicLine></basicLine>
    
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
</template>

<script>
import barChart from "./barChart";
import Vue from "vue";
const axios = require("axios");
import basicLine from './basicLine'
//import Highcharts from 'highcharts'

export default {
  name:"Au",
  data() {
    return {
      country: "",
      latest_stat_au: [],
      statesData:[],
      statesReportDate:[],
      reportTime: "4月14号 3:00pm",
      confiredCases: [
        ["au-ct", 103], //首都领地
        ["au-nt", 27], //北领地
        ["au-wa", 527], //西澳大利亚州
        ["au-sa", 433], //南澳大利亚
        ["au-ql", 998], //昆士兰州
        //  ['au-2557', 5],
        ["au-ts", 151], //塔斯马尼亚
        // ['au-jb', 7],
        ["au-ns", 2870], //新南威尔士州
        ["au-vi", 1291] //维多利亚州
      ],
      totalCases:6400,
      mapOptions: {
        chart: {
          map: "au-all"
        },
        title: {
          text: "澳大利亚各州疫情 每日报告"
        },
        subtitle: {
          text: ''
        },
        mapNavigation: {
          enabled: false,
          buttonOptions: {
            alignTo: "spacingBox"
          }
        },
        colorAxis: {
          min: 0
        },
        series: [
          {
            name: "确诊人数",
            states: {
              hover: {
                color: "#BADA55"
              }
            },
            dataLabels: {
              enabled: true,
              format: "{point.name}"
            },
            allAreas: true,
            data: [
              ]
          }
        ]
      }
    };
  },
  components: {
    barChart,
     basicLine
  },
  beforeCreate(){
      
  },
  created(){
   
  },
  mounted: function() {
    
    this.getData();
    this.setMaptData();   //这里的数据是手写的
      

  },
  methods: {
    setMaptData() {

      this.mapOptions.series[0].data = this.confiredCases;
      
      let subtitle = `每24小时更新一次 最近更新 <strong>${this.reportTime}</strong>`
      //console.log(subtitle);
      
      this.mapOptions.subtitle.text = subtitle
      //this.$forceUpdate()
    },
    //get the latest information of Australia
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
          country: "Australia"
        }
      })
        .then(response => {
          //1.get data in string format
          //console.log( typeof response.request.response)  //string

          //2.convert to Json object.
          let myObject = JSON.parse(response.request.response); //object
          //console.log("response:"+response.request.response)

          let obj = myObject.latest_stat_by_country;

          //3.可以用stringify 看Json 对象里的数据。
          // console.log("obj:"+JSON.stringify (obj))
          // console.log(typeof obj)  //stringify 后还是 object 对象

          Vue.set(this.latest_stat_au, 0, obj); // successe to set this.latest_stat_au = obj

          // console.log("stats:"+this.latest_stat_au) //object object

          //The ES6 way to loop through objects
          // Object.keys(obj).forEach(function(key) {
          //   let value = obj[key];
          //    console.log(key,value);
          // });
          console.log('success')
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
    formatCountryName(cName){
      // New South Wales Australia,Queensland Australia
      //remove the 'Australia' at the end of state's name
        let newCName='';
        let arr = cName.split(' ');
         for(let i=0;i<arr.length-1;i++){
              newCName +=arr[i]
                       
         }
         console.log (newCName);

 
        //covert english name to chinese

      
        switch(newCName){
          case "NewSouthWales":
            newCName="新南威尔士"
            break;
             case "Queensland":
            newCName="昆士兰州"
            break;
             case "Victoria":
            newCName="维多利亚州"
            break;
             case "WesternAustralia":
            newCName="西澳大利亚"
            break;
             case "SouthAustralia":
            newCName="南澳大利亚"
            break;
            case "Tasmania":
            newCName="塔斯马尼亚"
            break;
             case "AustralianCapitalTerritory":
            newCName="首都领地"
            break;
             case "NorthernTerritory":
            newCName="北领地"
            break;
        }

          // if(newCName==="NewSouthWales"){
          //   newCName="新南威尔士"
          // }
  
     



        return newCName
    },
    getMapData(){
      
    }

  }
};
</script>
 <style scoped>
#container {
  height: 500px;
  min-width: 310px;
  max-width: 800px;
  margin: 0 auto;
}
.loading {
  margin-top: 10em;
  text-align: center;
  color: gray;
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

caption {
  display: table-caption;
  text-align: center;
}
h2,
h5,h6{
  
  text-align: center;
}
h2{
  padding-top: 15px;
}
</style>