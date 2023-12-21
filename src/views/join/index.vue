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
    join() {
      axiosInstance.post(
          '/user/join',
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
                    <h1 class="h4 mb-4 font-weight-bold">Try Join</h1>
                  </div>
                  <form class="user" @submit.prevent="join">
                    <div class="form-floating mt-1">
                      <input type="text" class="form-control bg-dark" id="floatingInput" placeholder="email" v-model="username">
                      <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating mt-1">
                      <input type="password" class="form-control bg-dark" id="floatingInput" placeholder="password"
                             v-model="password">
                      <label for="floatingInput">Password</label>
                    </div>
                    <div class="form-floating mt-1">
                      <input type="text" class="form-control bg-dark" id="floatingInput" placeholder="name" v-model="name">
                      <label for="floatingInput">Name</label>
                    </div>
                    <div class="form-floating mt-1">
                      <input type="text" class="form-control bg-dark" id="floatingInput" placeholder="phoneNumber"
                             v-model="phoneNumber">
                      <label for="floatingInput">PhoneNumber</label>
                    </div>

                    <div class="form-check text-start my-3">
                      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                      <label class="form-check-label" for="flexCheckDefault">
                        Remember me
                      </label>
                    </div>
                    <div class="text-center w-100 py-1">
                      <button class="btn btn-primary w-100 py-2" type="submit">Join</button>
                    </div>
                    <div class="text-center w-100 py-1">
                      <button class="btn btn-dark w-100 py-2" type="button" @click="$router.push('/login')">Back to
                        Login
                      </button>
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