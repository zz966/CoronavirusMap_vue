<template>
  <div id="app">
    <h1>疫情可视化</h1>
    <div align="right" class="language">
      <label for="" class='language' >Language:</label>  
      <a class='language'  href="https://forfun.link/coronavirus/index.html#/au">  中文</a> <a class='language'  href="https://forfun.link/coronavirus/au/index.html#/au">English</a>
    </div>
    
    <nav class="navbar navbar-dark bg-primary">
      <router-link to="/home">你需要知道的</router-link>
      <router-link to="/au">澳大利亚</router-link>
      <router-link to="/world">全球</router-link>
    </nav>
    
    <router-view></router-view>
    <br />
    <br />
   
  
    
<div class="text-center">

    <footer  >
      

      <p>copyright © 2020 , Designed by ZZH</p>
    

    </footer>

</div>


    <br />
  </div>
</template>

<script>


export default {
  name: "App",
  components: {
   
  }
};
</script>




<style scoped>
h1 {
  text-align: center;
  margin: 10px;
}
a {
  color: white;
  text-shadow: black 2px;
}
.language{
  text-align: right;
  color: #000;
  text-shadow: black 2px;
  padding-right: 15px;
}
h2 {
  margin: 15px;
}
footer {
  text-align: center;
  font-size: 12px;
}
</style>
