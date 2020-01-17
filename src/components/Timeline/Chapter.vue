<template>
	<div class="chapter">
		<div class="chapterTitle">{{ chapter.title }}</div>
		<Event 
			v-for="event in chapter.events" 
			:key="event" 
			:event="event"
			:subjects="subjects"
		/>
	</div>
</template>

<script>
import Event from '@/components/Timeline/Event.vue'

export default {
	props: [ "chapter", "subjects" ],
	components: {
			Event
	}
}
</script>

<style lang="scss" scoped>
.chapterTitle {
	background-color: white;
	color: black;

	margin: 10px;
	font-style: italic;
	font-size: larger;
}
</style>