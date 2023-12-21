<script>
import UserApi from "@/api/user/UserApi";

export default {
  name: "SideBarV2",
  computed: {
    userInfo() {
      return this.$store.state.userStore.user
    }
  },
  methods: {
    logout() {
      UserApi.logout()
    },
  }
}
</script>

<template>
  <div class="d-flex flex-column flex-shrink-0 bg-gradient bg-dark text-center" style="width: 4.0rem;">
    <router-link to="/" class="d-block pt-3 link-light text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
      <font-awesome-icon :icon="['far', 'folder']" bounce size="2xl"/>
    </router-link>
    <hr/>
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <router-link to="/chat"  class="nav-link link-light">
          <font-awesome-icon :icon="['far', 'comments']" />
          <span style="font-size: x-small">CHAT</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link hover-overlay to="/chat"  class="nav-link link-light       background: linear-gradient(
        45deg,
        hsla(168, 85%, 52%, 0.5),
        hsla(263, 88%, 45%, 0.5) 100%
      );">
          <font-awesome-icon :icon="['far', 'pen-to-square']" />
          <span style="font-size: x-small">BOARD</span>
        </router-link>
      </li>
    </ul>
    <div class="mb-3">
    </div>
    <div class="dropdown dropend  mb-3">
      <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle " id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
        <font-awesome-icon :icon="['fas', 'user']" style="color: #ffffff;" />
      </a>
      <ul v-if="userInfo != null" class="dropdown-menu text-small shadow bg-dark" aria-labelledby="dropdownUser3" style="">
        <li><a class="dropdown-item text-light" href="#">New project...</a></li>
        <li><a class="dropdown-item text-light" href="#">Settings</a></li>
        <li><a class="dropdown-item text-light" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><p class="dropdown-item text-light" @click="logout" >Logout</p></li>
      </ul>
      <ul v-else class="dropdown-menu text-sm-start shadow bg-dark " aria-labelledby="dropdownUser3" style="">
        <li><router-link to="/login" class="dropdown-item text-light">Login</router-link></li>
        <li><router-link to="/join" class="dropdown-item text-light">Join</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.dropdown-item:hover {
  background-color: cornflowerblue;
}
</style>