import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default getPosts