<script>
import BoardComponent from "@/components/Board.vue";
import BoardApi from "@/api/BoardApi";

export default {
  name: 'BoardView',
  components: {BoardComponent},
  data() {
    return {
      boardData: {
        content: [],
        pageable: {
          totalPage: 0,
          pageNumber: 0,
          pageSize: 0,
          last: true,
          first: false,
          size: 0,
        },
        totalPages : 0,
        number : 1
      }
    }
  },
  computed: {
  },
  created() {
    BoardApi.getBoards(0)
        .then(result => this.boardData = result)
  },
  methods: {
    getBoardData(page){
      BoardApi.getBoards(page)
          .then(result => this.boardData = result)
    }
  }
}
</script>

<template>
  <div class="container-fluid">
    <BoardComponent :datas="this.boardData" v-on:movePage="getBoardData"/>
  </div>
</template>

<style>

</style>