<script>

import * as Stomp from "webstomp-client";
import SockJS from "sockjs-client"
import JwtStorage from "@/storage/JwtStorage";

export default {
  name: 'chatView', stompClient: undefined,

  data() {
    return {}
  },
  methods: {},
  created() {
    const serverURL = "http://localhost:8000/chat";
    this.stompClient = Stomp.over(new SockJS(serverURL));
    this.stompClient.connect({
          access_token: JwtStorage.getAccessToken()
        }, frame => {
          console.log("연결 성공!!! user : ", frame.headers['user-name'])
          this.stompClient.subscribe("/sub/chat", res => {
            console.log("message : {}", res.body)
          }, {
            access_token: JwtStorage.getAccessToken()
          })

          const message = {
            roomId: "8b36f955-509d-4e06-8093-52efa593bbe4",
            memberId: "1",
            payload: "TEST!!!!",
          }
          this.stompClient.send(
              "/pub/chat/message",
              JSON.stringify(message),
              {
                access_token: JwtStorage.getAccessToken()
              }
          )

        }, () => {
          console.log("연결 실패!!!")
        }
    )

  }

}
</script>

<template>
  <div></div>
</template>
<style scoped>
</style>