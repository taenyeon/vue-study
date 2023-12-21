<script>
import BoardComponent from "@/components/Board.vue";

export default {
  name: 'BoardView',
  components: {BoardComponent},
  data() {
    return {
      datas: [
        {
          id: 1,
          title: 'testTitle',
          writer: 'test',
          createdAt: '2023-12-21 08:00:00'
        }
      ]
    }
  },
}
</script>

<template>
  <div class="container-fluid">
    <BoardComponent :datas="this.datas"/>
  </div>
</template>

<style>

</style>