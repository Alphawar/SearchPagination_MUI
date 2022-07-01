import axios from "axios";

export const getPosts = async (url, query, setPosts, setPageQuantity, setPage, page = 1) => {
    const response = await axios.get(`${url}query=${query}&page=${page - 1}`)
    setPage(page)
    setPosts(response.data.hits)
    setPageQuantity(response.data.nbPages)
}