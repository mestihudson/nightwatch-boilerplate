import Vue from 'vue'
import Resource from 'vue-resource'

Vue.use(Resource)

const endpoint = (uri) => {
  const API = `${process.env.VUE_APP_API}`
  const noCache = new Date().getTime()
  const URL = `${API}/${uri}?${noCache}`
  console.error(URL)
  return URL
}

export default {
  getMessage () {
    return Vue.http.get(endpoint(`message`))
      .then(response => Promise.resolve(response.data))
      .catch(errors => Promise.reject(errors))
  }
}
