<script>
import jwtStorage from "@/storage/jwtStorage";

export default {
  name: 'homeView',
  data() {
    return {
      user: null
    }
  },
  methods: {
    logout() {
      if (this.$store.state.user != null) {
        jwtStorage.dropTokens()
        this.$store.dispatch("user/dropUser")
        this.$router.go(this.$router.currentRoute)
      }
    }
  }

}
</script>

<template>
  <div>HOME PAGE!!
    <p>{{this.$store.state.user}}</p>
  <button @click="logout()"> 로그아웃 </button>
  </div>
</template>

<style>

</style>