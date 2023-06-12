import axios from "axios";
const BASE_URL ="http://localhost:8000/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTcwNTZlYWVmMDIwODQyM2RjM2Y4YSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzI1ODY3NDksImV4cCI6MTY3MzE5MTU0OX0.O6I-GPp_w1WCVrDQ1CPbQP9V2eCpIPaZ26uT9ijZXdI"
export const publicRequest = axios.create({
    baseURL: BASE_URL
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})