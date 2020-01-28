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

// import $ from 'jquery'

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
	// 	setup(sketch) {
	// 		sketch.resizeCanvas(this.width, this.height);
	// 	},
	// 	draw(sketch) {
	// 		sketch.background("black");
	// 		this.drawArrow(sketch);
	// 		this.drawChapters(sketch);
	// 		sketch.noLoop();
	// 	},
	// 	drawArrow(sketch) {
	// 		sketch.push();
	// 		sketch.strokeWeight(2);
	// 		sketch.stroke(255);
	// 		// Shaft
	// 		sketch.line(this.width/2, 20, this.width/2, this.height - 20);
	// 		// Fletching
	// 		for (let i=0; i<3; i++) {
	// 			sketch.line(this.width/2, 40 + (i * 10), this.width/2 - 20, 20 + (i * 10));
	// 			sketch.line(this.width/2, 40 + (i * 10), this.width/2 + 20, 20 + (i * 10));
	// 		}
	// 		// Tip
	// 		sketch.line(this.width/2, this.height - 20, this.width/2 - 20, this.height - 40);
	// 		sketch.line(this.width/2, this.height - 20, this.width/2 + 20, this.height - 40);
	// 		sketch.pop();
	// 	},
	// 	drawChapters(sketch) {
	// 		sketch.push();
	// 		sketch.stroke(255);
	// 		sketch.fill(255);
			
	// 		let availableSpace = this.height - 80 - 80;

	// 		let numSpaces = 0;
	// 		for (let chapter of this.story.chapters) {
	// 			numSpaces++;
	// 			numSpaces += chapter.events.length;
	// 		}
	// 		numSpaces--;
	// 		let individualSpace = availableSpace / numSpaces;

	// 		let y = 80;
	// 		for (let chapter of this.story.chapters) {
	// 			sketch.rect(this.width/2 - 10, y, 20, 5);
	// 			y += individualSpace;
	// 			for (let i=0; i<chapter.events.length; i++) {
	// 				sketch.rect(this.width/2 - 5, y, 10, 2);
	// 				y += individualSpace;
	// 			}
	// 		}
	// 	},
	// 	windowresized(sketch) {
	// 		sketch.resizeCanvas(this.container.offsetWidth, this.container.offsetHeight);
	// 		this.draw(sketch);
	// 	}
	// },
	// // render(h) {
	// //     return h(vueP5, {on: this});
	// // },
	// mounted() {
	// 	this.container = $("#appearances")[0];
	// 	// this.width = this.container.offsetWidth;
	// 	// this.height = this.container.offsetHeight;
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