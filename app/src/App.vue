<template lang='pug'>
  #app
    h1 App
    hello-world(:message='message')
</template>

<script>
import axios from 'axios'

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: { HelloWorld },
  created () {
    axios.get(`${process.env.API}/message`)
      .then(response => {
        console.log(response)
        this.message = response.message
      })
      .catch(errors => console.error(errors))
  },
  data () {
    return { message: 'Smoke on the Water!' }
  }
}
</script>

<style lang='sass'>
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #ff0000
  margin-top: 60px
</style>
