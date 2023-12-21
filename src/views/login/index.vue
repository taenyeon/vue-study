<script>

import jwtStorage from "@/storage/JwtStorage";
import userService from "@/api/user/UserApi";

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
      userService.login(this.username, this.password)
    },
  },
}
</script>

<template>
  <div class="container m-auto">

    <!-- Outer Row -->
    <div class="row justify-content-center m-auto">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5 bg-gradient bg-dark text-light">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 mb-4 font-weight-bold">Try Login</h1>
                  </div>
                  <form @submit.prevent="submitForm">
                    <div class="form-floating mt-1">
                      <input type="text" class="form-control bg-dark" id="floatingInput" placeholder="name@example.com"
                             v-model="username">
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mt-1">
                      <input type="password" class="form-control bg-dark" id="floatingPassword" placeholder="Password"
                             v-model="password">
                      <label for="floatingPassword">Password</label>
                    </div>

                    <div class="form-check text-start my-3">
                      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                      <label class="form-check-label" for="flexCheckDefault">
                        Remember me
                      </label>
                    </div>
                    <div class="text-center w-100 py-1">
                      <button class="btn btn-primary w-100 py-2" type="submit">Login</button>
                    </div>
                    <div class="text-center w-100 py-1">
                      <button class="btn btn-primary w-100 py-2" type="button" @click="$router.push('/join')">Join</button>
                    </div>
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
