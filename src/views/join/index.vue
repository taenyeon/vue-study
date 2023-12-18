<script>

import {axiosInstance} from "@/api";

export default {
  name: "JoinForm",
  data() {
    return {
      username: '',
      password: '',
      name: '',
      phoneNumber: ''
    };
  },
  methods: {
    submitForm() {
      axiosInstance.post(
          '/user',
          {
            username: this.username,
            password: this.password,
            name: this.name,
            phoneNumber: this.phoneNumber
          }
      ).then(() => {
        this.$router.push("/")
      })
    },
  },
}
</script>

<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">username</label>
        <input type="text" id="username" v-model="username"/>
      </div>
      <div>
        <label for="name">name</label>
        <input type="text" id="name" v-model="name"/>
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" id="password" v-model="password"/>
      </div>
      <div>
        <label for="phoneNumber">phoneNumber</label>
        <input type="text" id="phoneNumber" v-model="phoneNumber"/>
      </div>
      <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<style scoped>

</style>