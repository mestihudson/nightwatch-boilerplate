<template lang='pug'>
  #app
    h1 App
    hello-world(:message='message')
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import api from '@/services/api'

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
