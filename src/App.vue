<template>
  <div id="app">
    <div>
      <Left-Side-Menu/>
    </div>

    <div id="container-router-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import LeftSideMenu from './components/Dashboard/LeftSideMenu.vue'
export default {
  components:{
    LeftSideMenu
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
}

  #container-router-view{
    height: 100%;
    overflow: scroll;
    width: calc(100% - 280px);
  }

  #container-router-view::-webkit-scrollbar:horizontal {
    height: 0;
    width: 0;
    display: none!important;
  }

  #container-router-view::-webkit-scrollbar-thumb:horizontal {
    display: none;
  }
</style>
