<template>
	<div id="appearances" style="background-color: black;">
		<div id="barLayer">
			<div v-for="chapter of story.chapters" 
				:key="chapter.title" >
				<TitleGrid :chapter="chapter" :subjects="activeSubjects" />
				<EventGrid :chapter="chapter" :subjects="activeSubjects" />
			</div>
		</div>
		<ArrowBG id="arrowLayer" />
	</div>
</template>

<script>
import TitleGrid from '@/components/Appearances/TitleGrid'
import EventGrid from '@/components/Appearances/EventGrid'
import ArrowBG from '@/components/General/ArrowBG'

export default {
	props: [ "subjects", "story" ],
	data() {
		return {
			width: 300,
			height: 300,
			container: null
		}
	},
	components: {
		TitleGrid,
		EventGrid,
		ArrowBG
	},
	computed: {
		bars() {
			let bars = [];
			for (let chapter of this.story.chapters) {
				bars.push({ string: chapter.title, type: "chapter" });
				for (let event of chapter.events) bars.push({ string: event, type: "event" });
			}

			return bars;
		},
		activeSubjects() {
			return this.subjects.filter(s => s.isShowing);
		}
	},
	methods: {
		getCenterIndex(chapter) {
			let numEvents = chapter.events.length;
			return Math.floor(numEvents) + 1;
		}
	}
}
</script>

<style scoped>
#appearances {
	background-color: black;

	display: grid;
}

#barLayer, #arrowLayer {
	grid-column: 1;
	grid-row: 1;
}

#barLayer {
	z-index: 4;
	height: 100%;
}

#barLayer > div {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
}

#arrowLayer {
	z-index: 0;
}

#top {
	min-height: 100%;
}

#barLayer {
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: space-evenly;

	margin-left: -1px;
	flex-grow: 1;
	padding-top: 100px;
	padding-bottom: 80px;
}

.chapter, .event {
	margin-bottom: 10px;

	background-color: white;
}

.chapter {
	height: 10px;
	width: 10px;

	display: flex;
	flex-direction: column;
}

.event {
	width: 5px;
	height: 5px;
}
</style>