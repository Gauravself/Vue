<template>
  <div>Welcome</div>
  <GreetingItem :text="text" />
</template>

<script>
import GreetingItem from './components/GreetingItem.vue'
export default {
  name: 'App',
  components: {
    GreetingItem
  },
  data() {
    return {
      text: 'Something Random'
    }
  }
}
</script>

<style scoped></style>
