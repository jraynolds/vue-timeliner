<template>
  <ul :class="{ maximized: windowStyle == 'max', minimized: windowStyle == 'min' }">
    <li v-for="event of events" :key="event">{{ event }}</li>
  </ul>
</template>

<script>
export default {
  props: [ "events", "windowStyle" ]
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