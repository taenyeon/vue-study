<script>
export default {
  name: 'homeView',
  data() {
    return {
      user: null
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.userStore.user
    }
  },
  methods: {
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
            {{ userInfo }}

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