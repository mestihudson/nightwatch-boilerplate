<template lang='pug'>
  #app
    h1 App
    hello-world(:message='message')
</template>

<script>
import api from '@/services/api'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: { HelloWorld },
  created () {
    api.getMessage()
      .then(response => {
        this.message = response.message
      })
      .catch(errors => console.error(errors))
  },
  data () {
    return { message: '' }
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
