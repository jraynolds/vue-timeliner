<template>
  <div class="bar" :style="dimensions" />
</template>

<script>
export default {
  props: [ "type" ],
  computed: {
    dimensions() {
      if (this.type == "chapter") return { height: "10px", width: "61px" }
      return { height: "4px", width: "23px" }
    }
  }
}
</script>

<style>
.bar {
  background-color: white;
  transition: all .5s ease-in-out;
}

.bar:hover {
  transform: scale(1.2);
}
</style>