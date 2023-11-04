<template>
  <!-- Data Passed -->
  <Form>
    <!-- Named Slots -->
    <template v-slot:help>
      <p>This is some help text</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </Form>
  <!-- Data not passed -->
  <Form> </Form>
  <p>{{ help }}</p>

  <Form>
    <div class="contact">
      <p>Contact help text</p>
    </div>
    <div class="fields">
      <input type="text" placeholder="email" />
      <input type="text" placeholder="message" />
    </div>
    <div class="buttons">
      <button type="submit">Submit</button>
    </div>
  </Form>
</template>

<script>
import Form from "./components/Form.vue";
export default {
  name: "App",
  components: { Form },
  data() {
    return {
      help: "This is some random help text",
    };
  },
};
</script>

<style scoped></style>
