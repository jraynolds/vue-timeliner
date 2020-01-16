<template>
	<div class="event">
		<span v-for="(word, index) of splitEvent" :key="index">
			<Subject 
				v-if="isInSubjects(word)" 
				:string="word" 
				:subjects="getSubjects(word)"/>
			<span v-else>{{word}}</span>
		</span>
	</div>
</template>

<script>
import Subject from '@/components/Subject.vue'

export default {
	props: [ "event", "subjects" ],
	components: {
		Subject
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
}
</style>