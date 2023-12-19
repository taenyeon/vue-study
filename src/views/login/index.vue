<script>

import jwtStorage from "@/storage/jwtStorage";
import JwtService from "@/api/jwtService";

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
      this.$router.push('/')
    }
  },
  methods: {
    submitForm() {
      let axiosInstance = JwtService.axiosInstance;
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
          jwtStorage.setTokens(response.data.body)
          this.$router.go()
        }
      }).catch((error) => {
        console.log(error)
        })
    },
  },
}
</script>

<template>
  <div class="container">

    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4 font-weight-bold">Try Login</h1>
                  </div>
                  <form class="user" @submit.prevent="submitForm">
                    <div class="form-group">
                      <input type="text" class="form-control form-control-user"
                             id="exampleInputEmail" aria-describedby="emailHelp"
                             placeholder="Enter Email Address..." v-model="username">
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control form-control-user"
                             id="exampleInputPassword" placeholder="Password" v-model="password">
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck">Remember
                          Me</label>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-user btn-block">
                      Login
                    </button>
                    <hr>
                    <router-link to="/join" class="btn btn-facebook btn-user btn-block">
                      <font-awesome-icon :icon="['fas', 'right-to-bracket']" /> Join
                    </router-link>
                    <a href="#" class="btn btn-facebook btn-user btn-block">
                      <font-awesome-icon :icon="['fas', 'arrow-right-arrow-left']" /> Reset Password
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>

</style>