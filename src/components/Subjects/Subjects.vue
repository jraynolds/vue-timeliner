<template>
	<div id="subjects">
		<SubjectAdder v-on:addSubject="addSubject"/>
		<SubjectBox 
			v-for="(subject, index) of subjects.filter(s => s.isShowing)" 
			:key="index" 
			:subject="subject" 
			v-on:changeStrings="changeStrings" />
	</div>
</template>

<script>
import SubjectBox from '@/components/Subjects/SubjectBox'
import SubjectAdder from '@/components/Subjects/SubjectAdder'

import parser from '@/assets/scripts/storyParsing.js'

export default {
	props: [ "subjects", "story" ],
	components: {
		SubjectBox,
		SubjectAdder
	},
	methods: {
		addSubject(titleString) {
			let subject = {};
			subject.color = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
			subject.strings = [];
			subject.isShowing = true;
			for (let title of titleString.split(",")) subject.strings.push(title.trim());
			parser.addEventsToSubjects([subject], this.story);
			this.subjects.push(subject);
		},
		changeStrings(subject, newString) {
			subject.strings = [];

			for (let string of newString.split(",")) subject.strings.push(string.trim());

			for (let otherSub of this.subjects.filter(sub => sub != subject)) {
				otherSub.strings = otherSub.strings.filter(s => !subject.strings.includes(s));
				if (otherSub.strings.length == 0) {
					this.subjects.splice(this.subjects.indexOf(otherSub), 1)
				}
			}

			parser.addEventsToSubjects(this.subjects, this.story);
		}
	}
}
</script>

<style scoped>
#subjects {
	background-color: black;
	
	display: flex;
	flex-direction: column;
	padding: 5px;
}
</style>