import BaseApi from "@/api/BaseApi";

class BoardApi {

    async getBoards(currentPage) {
        let api = BaseApi.axiosInstance;
        let page = currentPage || 0;
        return await api.get("/board",
            {
                params:
                    {
                        currentPage: page
                    }
            })
            .then((response) => {
                return response.data.body;
            })
            .catch(() => {
                return null
            })
    }

}

export default new BoardApi()


