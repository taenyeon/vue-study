class UserStorage {
    getUserInfo() {
        return JSON.parse(localStorage.getItem("userInfo"))
    }

    async setUserInfo(user) {
        localStorage.setItem("userInfo", JSON.stringify(user))
    }

    async dropUserInfo(){
        localStorage.removeItem("userInfo")
    }

}

export default new UserStorage()