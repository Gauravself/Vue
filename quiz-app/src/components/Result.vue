<template>
  <div class="result">
    <div class="title">{{ results[resultIndex].title }}</div>
    <div class="desc">{{ results[resultIndex].desc }}</div>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: ["totalCorrect", "results"],
  computed: {
    resultIndex() {
      let index = 0;

      this.results.forEach((element, i) => {
        if (
          element.min <= this.totalCorrect &&
          this.totalCorrect >= element.max
        ) {
          index = i;
        }
      });

      return index;
    },
  },
};
</script>
