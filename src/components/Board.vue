<script>
export default {
  name: "BoardComponent",
  props: ['datas'],
  data() {
    return {
      boardHeaders: ['id', 'title', 'writer', 'createdAt']
    }
  },
  computed: {
    boardData: function () {
      return this.datas
    },
    pageData() {
      let pageable = this.boardData;
      let maxPage = pageable.totalPages < pageable.number + 4
          ? pageable.totalPages : pageable.number;
      let pageNumber = pageable.number + 1
      let pages = []
      for (let i = pageNumber; i <= maxPage; i++) {
        let pageInfo = {
          pageNumber: i,
          isCurrentNumber: pageNumber === i
        }
        pages.push(pageInfo)
      }
      return pages
    },
  },
  methods: {
    getHeaders() {
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
        <th v-for="item in boardHeaders" :key="item">{{ item }}</th>
      </tr>
      </thead>
      <tbody class="align-middle">
      <tr v-for="item in boardData.content" :key="item.id">
        <td class="col-md-1">{{ item.id }}</td>
        <td class="col-md-5">{{ item.title }}</td>
        <td class="col-md-1">{{ item.member.name }}</td>
        <td class="col-md-2">{{ item.createdAt }}</td>
      </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link text-dark" href="#" tabindex="-1" aria-disabled="true">Prev</a>
        </li>
        <li v-for="item in pageData" :key="item.pageNumber" @click="$emit('movePage', item.pageNumber-1)" class="page-item">
          <a class="page-link text-dark" href="#">{{ item.pageNumber }}</a>
        </li>
        <li class="page-item">
          <a class="page-link text-dark" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>

</style>