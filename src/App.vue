<template>
  <div id="app">
  
    <router-view/>

  </div>
</template>


<script>
// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";

export default {
  name: "app",
  components:{
    // Header,
    // Footer
  }
}
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

.body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  
}
</style>
