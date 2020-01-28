<template>
  <div class="arrowLayer">
    <div class="arrowFletching" />
    <div class="arrowShaft" />
    <div class="arrowTip" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.arrowLayer {
  display: grid;
  grid-template-rows: 101px 1fr 97px;
}

.arrowFletching, .arrowShaft, .arrowTip {
	background-position-x: center;
}

.arrowFletching {
  background-image: url("../../assets/images/arrowFletching.png");
}

.arrowShaft {
  background-image: url("../../assets/images/arrowShaft.png");
  background-repeat: repeat-y;
}

.arrowTip {
  background-image: url("../../assets/images/arrowTip.png");
}
</style>