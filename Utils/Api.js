import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: "AIzaSyAMjU5KvjETeycpR-3F9lfx3R6BEl_z6GA",
  },
})