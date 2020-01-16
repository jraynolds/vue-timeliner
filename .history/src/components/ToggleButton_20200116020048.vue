<template>
	<div class="toggleButton" 
		:class="{off: !view.isShowing}" 
		@click="view.isShowing = !view.isShowing"
	>
	</div>
</template>

<script>
export default {
	props: [ "view" ]
}
</script>

<style lang="scss" scoped>
.toggleButton {
	display: flex;
	flex-grow: 1;
	margin-left: 15px;
	height: 100%;
	border: 1px solid white;

	cursor: pointer;
	transition: opacity 1s;
}

.off {
	opacity: 0.3;
}
</style>