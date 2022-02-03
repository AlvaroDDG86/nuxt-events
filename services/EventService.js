import axios from 'axios'

const api = axios.create({
  baseURL: 'https://nuxt-api-ef3f3-default-rtdb.firebaseio.com',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  getEvents() {
    return api.get('events.json')
  },
  getEvent(id) {
    return api.get(`events/${id}.json`)
  }
}
