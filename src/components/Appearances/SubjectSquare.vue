<template>
  <div class="square" 
    :class="{ hovering: isHovered }"
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

<style>
.square {
  transition: .5s ease-in-out all;
}

.hovering {
  transform: scale(1.2);
}
</style>