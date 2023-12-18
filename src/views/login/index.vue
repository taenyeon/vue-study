<script>

import {axiosInstance} from "@/api";
import jwtStorage from "@/storage/jwtStorage";

export default {
  name: "LoginForm",
  data() {
    return {
      username: '',
      password: '',
    };
  },
  mounted() {
    let refreshToken = jwtStorage.getRefreshToken();
    if (refreshToken !== null) {
      alert(this.$store.state.user.name)
      this.$router.push('/')
    }
  },
  methods: {
    submitForm() {
      axiosInstance.post(
          '/user/login',
          {
            username: this.username,
            password: this.password,
          }
      ).then((response) => {
        if (response.data.resultCode !== 'SUCCESS') {
          alert('login fail!!')
        } else {
          alert('accessToken : ' + response.data.body.accessToken)
          jwtStorage.setTokens(response.data.body)

          // 유저 정보 불러오기.
          axiosInstance.get('/user')
              .then((response) => {
                if (response.data.resultCode !== 'SUCCESS') {
                  alert('your not loggedIn')
                } else {
                  this.$store.dispatch('user/setUser', response.data.body)
                }
              })

          this.$router.push("/")
        }
      })
    },
  },
}
</script>

<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">email</label>
        <input type="text" id="username" v-model="username"/>
      </div>
      <div>
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password"/>
      </div>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<style scoped>

</style>