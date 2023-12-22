import BaseApi from "@/api/BaseApi";

class BoardApi {

    async getBoards(currentPage) {
        let api = BaseApi.axiosInstance;
        let page = currentPage || 0;
        api.get("/board",
            {
                params:
                    {
                        currentPage: page
                    }
            })
            .then((response) => {
                alert(response.data.toJSON)
                return response.data.body;
            })
            .catch()
    }

}

export default new BoardApi()


