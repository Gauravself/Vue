<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
        class="bar"
        :style="{ width: `${(questionsAnswered / questions.length) * 100}%` }"
      ></div>
      <div class="status">
        {{ questionsAnswered }} out of {{ (questions, length) }} questions
        answered
      </div>
    </div>
    <transition-group name="fade">
      <div
        class="single-question"
        v-for="({ q, answers }, index) in questions"
        :key="q"
        v-show="index === questionsAnswered"
      >
        <div class="question">{{ q }}</div>
        <div class="answers">
          <div
            class="answer"
            v-for="answer in answers"
            @click.prevent="handleAnswerSubmission(answer.is_correct)"
            :key="answer.text"
          >
            {{ answer.text }}
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Questions",
  props: ["questions", "questionsAnswered"],
  emits: ["questionsAnswered-change"],
  methods: {
    handleAnswerSubmission(ans) {
      this.$emit("questionsAnswered-change", ans);
    },
  },
};
</script>
