<template>
  <div>
    <p>{{ firstName }} {{ lastName }}</p>
  </div>
  <div>
    <button @click="increment">Increment</button>
    <p>{{ age }}</p>
    <button @click="decrement">Decrement</button>
  </div>
  <div>
    <h2>FullName is :{{ fullName }}</h2>
    <!-- <input v-model="fullName" /> -->
    <input type="text" @input.prevent="updateFullName" />
  </div>
  <div>
    <p>{{ getComputedFullName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Gaurav",
      lastName: "Rastogi",
      age: 25,
      fullName: "Best Gaurav Rastogi",
    };
  },
  methods: {
    increment() {
      return this.age++;
    },
    decrement() {
      return this.age--;
    },
    updateFullName(e) {
      console.log(e);
      return (this.fullName = e.target.value);
    },
  },
  computed: {
    getComputedFullName() {
      return `${this.firstName.toUpperCase()} ${this.lastName}`;
    },
  },
};
</script>

<style scoped></style>
