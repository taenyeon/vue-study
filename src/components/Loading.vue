<template>
  <div v-if="isLoading" class="progress mt-0 mb-4" style="height: 4px">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100"
         aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "loadingComponent",
  data() {
    return {
      isLoading: this.$store.state.loadingStore.is_loading
    }
  }
};
</script>

<style scoped>

</style>