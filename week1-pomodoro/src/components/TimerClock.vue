<script>
export default {
  props: {
    active: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      breakMinutes: 5,
      workMinutes: 25,
      interval: null,
    }
  },
  computed: {
    status() {
      return 'Break'
    },
  },
  methods: {
    toggleTimer() {},
    resetTimer() {},
    timerComplete() {},
  },
}
</script>
<template>
  <div>
    <div v-if="active">timer is active</div>
    <div v-else>timer in inactive</div>
    Status {{ status }}
  </div>
</template>
