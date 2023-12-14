<template>
  <div class="con">
    <div class="hd_area">
      <h3>Vue Study</h3>
      <hr/>
    </div>
    <main>
      <div>
        <router-link to="/">
          <button>main</button>
        </router-link>
        <router-link to="/test">
          <button>test</button>
        </router-link>
      </div>
      <div class="rv_area">
        <router-view></router-view>
      </div>
    </main>
    <div class="ft_area">
      <hr/>
      <h3>FOOTER AREA</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
button {
  margin: 3px;
}

.con {
  width: 80%;
  margin: 0 10%;
}

.hd_area, .ft_area {
  text-align: center;
}

.rv_area {
  border: 1px solid gray;
  margin: 5px 0;
  padding: 30px;
}
</style>
