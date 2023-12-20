<script>
export default {
  name: "sideBar"
}
</script>

<template>
  <ul class="navbar-nav opacity-0 bg-gradient-dark sidebar sidebar-dark accordion col-1 p-0 m-0" style="max-width: 4rem" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <router-link to="/" class="sidebar-brand d-flex align-items-center justify-content-center">
      <div class="sidebar-brand-icon">
        <font-awesome-icon :icon="['fas', 'folder']" bounce size="lg" />
      </div>
    </router-link>

    <!-- Divider -->

    <!-- Nav Item - Dashboard -->
    <li class="nav-item align-items-center justify-content-center">
      <router-link to="/chat" class="nav-link" style="text-align: center; max-width: 4rem;"  href="/">
        <font-awesome-icon :icon="['far', 'comments']" fixed-width/>
        <span class="badge badge-danger badge-counter">2</span>
        <p class="" style="font-size: 10px">chat</p>
        </router-link>
    </li>

    <!-- Divider -->
    <!-- Nav Item - Dashboard -->
    <li class="nav-item align-items-center justify-content-center">
      <router-link to="/board" class="nav-link" style="text-align: center; max-width: 4rem"  href="/">
        <font-awesome-icon :icon="['far', 'pen-to-square']" />
        <p class="" style="font-size: 10px">board</p>
      </router-link>
    </li>

    <li class="nav-item align-items-center justify-content-center">
      <router-link to="/board" class="nav-link" style="text-align: center; max-width: 4rem"  href="/">
        <font-awesome-icon :icon="['far', 'pen-to-square']" />
        <p class="" style="font-size: 10px">board</p>
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
a {

}
</style>