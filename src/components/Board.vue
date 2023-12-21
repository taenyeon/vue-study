<script>
export default {
  name: "BoardComponent",
  data() {
    return {
      values: this.datas || [],
      headers: Object.keys(this.datas[0]) || [],
      page: this.pageInfo || null
    }
  },
  props: ['datas', 'pageInfo'],
  computed: {
  },
}
</script>

<template>
  <div>

  <table class="table table-dark table-hover">
    <thead class="align-middle">
    <tr>
      <th v-for="item in headers" :key="item">{{item}}</th>
    </tr>
    </thead>
    <tbody class="align-middle">
    <tr v-for="item in datas" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.title}}</td>
      <td>{{item.writer}}</td>
      <td>{{item.createdAt}}</td>
    </tr>
    </tbody>
  </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link text-dark" href="#" tabindex="-1" aria-disabled="true">Prev</a>
        </li>
        <li class="page-item"><a class="page-link text-dark" href="#">1</a></li>
        <li class="page-item"><a class="page-link text-dark" href="#">2</a></li>
        <li class="page-item"><a class="page-link text-dark" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link text-dark" href="#" >Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>

</style>