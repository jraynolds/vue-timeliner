<template>
	<div class="event">
		<span v-for="(word, index) of splitEvent" :key="index">
			<HoverSubject 
				v-if="isInSubjects(word)" 
				:string="word" 
				:subjects="getSubjects(word)"/>
			<span v-else>{{word}}</span>
		</span>
	</div>
</template>

<script>
import HoverSubject from '@/components/Timeline/HoverSubject'

export default {
	props: [ "event", "subjects" ],
	components: {
		HoverSubject
	},
	computed: {
		splitEvent() {
			return this.event.split(/\b/);
		}
	},
	methods: {
		isInSubjects(word) {
			if (word == " ") return false;
			for (let s of this.subjects) {
				for (let string of s.strings) {
					if (string.includes(word)) {
						return true;
					}
				}
			}
			return false;
		},
		getSubjects(word) {
			let subjects = [];
			for (let s of this.subjects) {
				for (let string of s.strings) {
					if (string.includes(word)) {
						subjects.push(s);
						break;
					}
				}
			}
			return subjects;
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
	text-align: right;
}
</style>