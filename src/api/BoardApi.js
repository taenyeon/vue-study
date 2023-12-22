import BaseApi from "@/api/BaseApi";

class BoardApi {

    async getBoards(currentPage) {
        let page = currentPage || 0;
        let api = BaseApi.axiosInstance;
        api.get("/board", {currentPage: page})
            .then((response) => {
                return response.data.body;
            })
            .catch()
    }

}

export default new BoardApi()


