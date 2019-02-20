import Vue from 'vue'
import Resource from 'vue-resource'

Vue.use(Resource)

export const api = {
  getMessage () {
    const URL = `${process.env.API}/message`
    return Vue.http.get(URL)
      .then(response => Promise.resolve(response.data))
      .catch(errors => Promise.reject(errors))
  }
}

export default {
  api
}
