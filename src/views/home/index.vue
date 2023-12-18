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
  <div id="page-top">

    <div id="wrapper">

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">


          <!-- Begin Page Content -->
          <div class="container-fluid">

            <!-- Page Heading -->
            <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>
            <p>{{ this.$store.state.user }}</p>
            <button @click="logout()"> 로그아웃</button>

          </div>
          <!-- /.container-fluid -->

        </div>
        <!-- End of Main Content -->

      </div>
      <!-- End of Content Wrapper -->

    </div>
  </div>
</template>

<style>

</style>