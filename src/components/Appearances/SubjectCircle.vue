<template>
  <div class="circle" 
    :class="{ hidden: isHidden, hovering: isHovered }"
    :style="{ backgroundColor: backgroundColor }"
    :title="title" 
    @mouseenter="subject.isHovered = true"
    @mouseleave="subject.isHovered = false" />
</template>

<script>
export default {
  props: [ "subject", "isHidden" ],
  computed: {
    isHovered() {
      if (!this.subject || !this.subject.isHovered) return false;
      return true;
    },
    backgroundColor() {
      if (!this.subject) return "black";
      return this.subject.color;
    },
    title() {
      if (!this.subject) return "";
      return this.subject.strings.join(", ");
    }
  }
}
</script>

<style>
.circle {
  width: 10px;
  height: 100%;
  border-radius: 5px;

  transition: .5s all ease-in-out;
}

.hovering {
  transform: scale(1.2);
}

.hidden {
  visibility: hidden;
}
</style>