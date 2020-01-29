<template>
  <div :class="{ hovering: isHovered }"
    :style="{ gridRowStart: start, gridRowEnd: end, backgroundColor: subject.color }"
    @mouseenter="subject.isHovered = true"
    @mouseleave="subject.isHovered = false" />
</template>

<script>
export default {
  props: [ "subject", "start", "end" ],
  computed: {
    isHovered() {
      if (!this.subject) return false;
      return this.subject.isHovered;
    }
  }
}
</script>

<style scoped>
.hovering {
  transform: scaleX(3.0);
}
</style>