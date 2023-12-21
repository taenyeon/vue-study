class JwtStorage {
    getRefreshToken() {
        return localStorage.getItem("refresh_token")
    }

    getAccessToken() {
        return localStorage.getItem("access_token")
    }

    async setTokens(token) {
        localStorage.setItem("refresh_token", token.refreshToken)
        localStorage.setItem("access_token", token.accessToken)
    }

    dropTokens() {
        localStorage.removeItem("refresh_token")
        localStorage.removeItem("access_token")
    }

    updateRefreshToken(refreshToken) {
        localStorage.setItem("access_token", refreshToken)
    }

    updateAccessToken(accessToken) {
        localStorage.setItem("access_token", accessToken)
    }


}

export default new JwtStorage()
