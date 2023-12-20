<script>
export default {
  name: "SideBarV2"
}
</script>

<template>
  <div class="d-flex flex-column flex-shrink-0 bg-gradient bg-dark text-center" style="width: 4.5rem;">
    <a href="/" class="d-block pt-3 link-light text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
      <font-awesome-icon :icon="['far', 'folder']" bounce size="2xl"/>
    </a>
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
    <div class="dropdown mb-3">
      <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle">
      </a>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3" style="">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>