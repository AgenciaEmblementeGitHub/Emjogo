<template>
  <div id="home">
    <div id="container-router-view">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftSideMenu from '@/components/Dashboard/LeftSideMenu.vue'

export default {
  name: 'HomeView',
  components: {
    LeftSideMenu
  }
}
</script>

<style scoped>
  #home{
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
