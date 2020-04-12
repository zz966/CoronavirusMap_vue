<template>
  <div class="container">
    <br />
    <h2>What is COVID-19</h2>

    <p>
      Coronaviruses are a large family of viruses that cause respiratory infections.
      There is no treatment for COVID-19, but medical care can treat most of the symptoms.
      <strong>Antibiotics do not work on viruses.</strong>
    </p>

    <h5>People with coronavirus may experience:</h5>
    <ul>
      <li>fever</li>
      <li>flu-like symptoms such as coughing, sore throat and fatigue</li>
      <li>shortness of breath</li>
    </ul>
    <h5>How it spreads</h5>
    <p>The virus can spread from person to person through</p>
      <ul>
        <li>close contact with an infectious person (including in the 24 hours before they started showing symptoms)</li>
        <li>contact with droplets from an infected person’s cough or sneeze</li>
        <li>touching objects or surfaces (like doorknobs or tables) that have cough or sneeze droplets from an infected person, and then touching your mouth or face</li>
      </ul>
      
     <p> COVID-19 is a new disease, so there is no existing immunity in our community. This means that COVID-19 could spread widely and quickly.</p>

    <h5>How to seek medical attention</h5>
    <p>If you are sick and think you have symptoms of COVID-19, seek medical advice. If you want to talk to someone about your symptoms, call the National Coronavirus Helpline for advice.</p>
    <h5>
      National Coronavirus Helpline:
      <strong>1800 020 080</strong>
    </h5>
    <p>Call this line if you are seeking information on coronavirus (COVID-19). The line operates 24 hours a day, seven days a week.</p>

    <h5>
      <strong>If you have severe symptoms such as dyspnea, call 000 for emergency medical help</strong>
    </h5>
    <p>To seek medical help from a doctor or hospital, call ahead of time to book an appointment.</p>

<h5>GP Respiratory Clinics</h5>
    <p>The Australian Government is establishing 100 GP Respiratory Clinics to assess people with fever, cough, a sore throat, or shortness of breath.</p>
    <p>We are setting these clinics up over the next few weeks. Clinics in Ryde, NSW, and Morayfield, Qld, started operating on 21 March 2020.</p>
    <p>If you’re not currently near Ryde, NSW, or Morayfield, Qld, there is no GP Respiratory Clinic in your area yet.</p>
    <p>Visit your state or territory health department website for more information on state and territory fever clinics and other services.</p>
   
   <p>Above information is from the website of Australian Government department of health</p>
   <p> for more details, please go to the website: <a href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/what-you-need-to-know-about-coronavirus-covid-19">Australian Government department of health</a></p>
   
    <!-- <div class="text-center">
      <img src="../assets/healthyStyle.png" alt="healthyStyle.png" />
    </div> -->
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
    
    <!-- <div id = 'chart1' style='width:100%;height:300px;'></div> -->
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  name:'Home',
  data() {
    return {};
  },
  mounted() {
    //this.init();
  },
  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("chart1"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "  晚一点更新...只更新了澳大利亚的数据  "
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

<style>
</style>