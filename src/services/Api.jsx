import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://192.168.31.1:3001/blog/v1',
    timeout: 5000
})

export const addComment = async (data) => {
    try {
        return await apiClient.post('/comment', data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}
