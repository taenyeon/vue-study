<script>
export default {
  name: "BoardComponent",
  props: ['datas'],
  computed: {
    boardData: function () {
      return this.datas
    }
  },
  methods: {
    getPageList() {

    },
    getHeaders(){
      return Object.keys(this.boardData.content[0]);
    }
  }
}
</script>

<template>
  <div>

    <table class="table table-dark table-hover">
      <thead class="align-middle">
          <tr>
            <th v-for="item in getHeaders()" :key="item">{{item}}</th>
          </tr>
      </thead>
      <tbody class="align-middle">
      <tr v-for="item in boardData.content" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.member.name }}</td>
        <td>{{ item.createdAt }}</td>
      </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link text-dark" href="#" tabindex="-1" aria-disabled="true">Prev</a>
        </li>
        <li class="page-item"><p @click="$emit('movePage', 1)" class="page-link text-dark" href="#">1</p></li>
        <li class="page-item"><p class="page-link text-dark" href="#">2</p></li>
        <li class="page-item"><p class="page-link text-dark" href="#">3</p></li>
        <li class="page-item">
          <a class="page-link text-dark" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>

</style>