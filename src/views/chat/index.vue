<script>

export default {
  name: 'chatView',
  data() {
    return {}
  },
  methods: {}

}
</script>

<template>
  <div class="">
    <ul class="navbar-nav bg-dark col-1 sidebar sidebar-dark" id="chatSideBar">
      <div class="sidebar-brand d-flex align-items-center justify-content-center">
        <div class="sidebar-brand-text mx-3">CHAT</div>
      </div>

      <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-50 navbar-search">
        <div class="input-group">
          <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                 aria-label="Search" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button">
              <i class="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form>

      <hr/>
      <li class="nav-item">
        <div class=" ml-2 p-2 row">
          <img class="img-profile rounded-circle float-start"
               src="@/assets/img/undraw_profile.svg">
            <div class="name ml-2" style="color: white">김태연</div>
        </div>
      </li>

    </ul>
  </div>
</template>
<style scoped>

#chatSideBar img {
  width: 20px
}

#chatSideBar .name {
  font-size: 15px
}
#chatSideBar {
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}

</style>