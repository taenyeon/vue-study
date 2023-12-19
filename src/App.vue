<template>
  <div id="wrapper">
    <LoadingComponent/>
    <SideBar/>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
      <NavBar/>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/sideBar.vue";
import LoadingComponent from "@/components/Loading.vue";

export default {
  name: 'App',
  components: {LoadingComponent, SideBar, NavBar},
}
</script>

<style>
@import "./assets/css/sb-admin-2.css";
@import "./assets/vendor/fontawesome-free/css/all.min.css";
</style>
