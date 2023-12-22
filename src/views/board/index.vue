<script>
import BoardComponent from "@/components/Board.vue";
import BoardApi from "@/api/BoardApi";

export default {
  name: 'BoardView',
  components: {BoardComponent},
  data() {
    return {
      datas: {
        content: [],
        pageable: {
          totalPage: 0,
          pageNumber: 0,
          pageSize: 0,
          last: true,
          first: false,
          size: 0,
        }
      }
    }
  },
  computed: {},
  mounted() {
    BoardApi.getBoards(0)
        .then((result) => {
          alert(result)
          this.datas = result
        })
  }
}
</script>

<template>
  <div class="container-fluid">
    <BoardComponent :datas="this.datas"/>
  </div>
</template>

<style>

</style>