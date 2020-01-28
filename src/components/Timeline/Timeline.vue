<template>
	<div id="timeline">
		<div id="timelineLayer">
			<Chapter 
				v-for="chapter of story.chapters" 
				:key="chapter.title" 
				:chapter="chapter" 
				:subjects="subjects"
			/>
		</div>
		<ArrowBG id="arrowBGLayer" />
	</div>
</template>

<script>
import Chapter from '@/components/Timeline/Chapter.vue'
import ArrowBG from '@/components/General/ArrowBG'

export default {
	props: [ "story", "subjects" ],
	components: {
		ArrowBG,
		Chapter
	}
}
</script>

<style lang="scss" scoped>
#timeline {
    display: grid;
		background-color: black;
		
		overflow-y: auto;
}

#timelineLayer, #arrowBGLayer {
	grid-column: 1;
	grid-row: 1;
}

#timelineLayer {
	z-index: 2;

	padding-top: 100px;
	padding-bottom: 100px;
}

#arrowBGLayer {
	z-index: 0;
}
</style>