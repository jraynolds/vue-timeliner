<template>
	<div class="event">
		<span v-for="(object, index) of getIndices" :key="index">
			<HoverSubject 
				v-if="object.subjects.length > 0" 
				:string="object.string" 
				:subjects="object.subjects"/>
			<span v-else>{{object.string}}</span>
		</span>
	</div>
</template>

<script>
import HoverSubject from '@/components/Timeline/HoverSubject'
import parser from '@/assets/scripts/storyParsing.js'

export default {
	props: [ "event", "subjects" ],
	components: {
		HoverSubject
	},
	computed: {
		getIndices() {
			let indices = parser.getSubjectsAtIndices(this.subjects, this.event);

			return indices;
		}
	}
}
</script>

<style lang="scss" scoped>
.event {
	color: white;
	font-size: .9em;

	width: 45%;
	margin: 5px;
}

.event:nth-child(odd) {
	margin-left: auto;
}

.event:nth-child(even) {
	text-align: right;
}
</style>