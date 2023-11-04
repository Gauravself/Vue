<template>
  <form>
    <!-- Data inside slots can act as default incase data is not passed from parent -->
    <slot>This is something random</slot>

    <!-- Named Slots -->
    <div class="help"><slot name="help"></slot></div>
    <div class="fields"><slot name="fields"></slot></div>
    <div class="button"><slot name="buttons"></slot></div>
  </form>
</template>

<script>
export default {
  name: "Form",
};
</script>
