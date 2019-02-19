<template lang='pug'>
  .hello: h3 {{ message }}
</template>

<script>
export default {
  props: ['message']
}
</script>

<style scoped lang="sass">
h3
  margin: 40px 0 0
  color: #4de5aa
</style>
