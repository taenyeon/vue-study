<script>
export default {
  name: 'homeView',
  data() {
    return {
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.userStore.user
    }
  },
  mounted() {
    this.$store.dispatch('userStore/loadUser')
  },
  methods: {
  }

}
</script>

<template>


          <!-- Begin Page Content -->
          <div class="container-fluid">

            <!-- Page Heading -->
            <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>
            {{ userInfo }}

          </div>
          <!-- /.container-fluid -->

</template>

<style>

</style>