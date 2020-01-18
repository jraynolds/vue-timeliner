<template>
	<div id="timeline">
		<Chapter 
			v-for="chapter of story.chapters" 
			:key="chapter.title" 
			:chapter="chapter" 
			:subjects="subjects"
		/>
	</div>
</template>

<script>
import Chapter from "@/components/Timeline/Chapter.vue"

export default {
	props: [ "story", "subjects" ],
	components: {
			Chapter
	}
}
</script>

<style lang="scss" scoped>
#timeline {
    display: flex;
		background-color: black;
}
</style>