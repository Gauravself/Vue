<template>
  <div>{{ msg }} - {{ text }}</div>
</template>

<script>
export default {
  name: 'GreetingItem',
  props: ['text'],
  data() {
    return {
      msg: 'Hello Gaurav'
    }
  }
}
</script>

<style scoped>
div {
  color: red;
}
</style>
