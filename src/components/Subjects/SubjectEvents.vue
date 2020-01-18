<template>
  <ul :class="{ maximized: windowStyle == 'max', minimized: windowStyle == 'min' }">
    <li v-for="event of events" :key="event">{{ event }}</li>
  </ul>
</template>

<script>
export default {
  props: [ "events", "windowStyle" ],
  // data() {
  //   return {
  //     events: this.subject.events
  //   }
  // }
  // computed: {
  //   events() {
  //     return this.subject.events;
  //   }
  // },
  watch: {
    events: {
      deep: true,
      handler() {
        // eslint-disable-next-line no-console
        console.log("Watching!");
      }
    }
  }
}
</script>

<style scoped>
.maximized {
  max-height: 1000px;
}

.minimized {
  max-height: 40px;
}
</style>