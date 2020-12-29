import axios from 'axios';

export default axios.create({
    baseURL: 'https://newsapi.org/v2/',
    headers: {
        Authorization: 'Client-ID 067f8bfac9874aa6a060e85de390a899'
    }
})