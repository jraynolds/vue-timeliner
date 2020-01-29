<template>
	<div class="toggleButton"
		:style="{ backgroundColor: bgColor, color: color }"
		:class="{off: !view.isShowing}" 
		@click="view.isShowing = !view.isShowing"
	>
		{{ innerText }}
		<div v-if="hasArrow" style="grid-column: 5 / 6; grid-row: 3 / 9; background-color: white;" />
		<div v-if="hasArrow" style="grid-column: 4 / 5; grid-row: 2 / 3; background-color: white;" />
		<div v-if="hasArrow" style="grid-column: 6 / 7; grid-row: 2 / 3; background-color: white;" />
		<slot style="z-index: 1;"></slot>
	</div>
</template>

<script>
export default {
	props: {
		view: {},
		bgColor: { default: "unset" },
		innerText: {},
		hasArrow: { default: false },
		color: { default: "white" }
	}
}
</script>

<style lang="scss" scoped>
.toggleButton {
	height: 50px;
	width: 50px;
	padding: 2px;

	font-size: 0.5em;
	white-space: pre;

	margin-left: 15px;
	border: 1px solid white;

	cursor: pointer;
	transition: opacity 1s;

	background-size: contain;
	background-position-x: -1px;

	display: grid;
	grid-template-columns: repeat(3, 1fr) repeat(3, 4px) repeat(3, 1fr);
	grid-template-rows: repeat(9, 1fr);
}

.off {
	opacity: 0.3;
}
</style>