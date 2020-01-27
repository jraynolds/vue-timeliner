<template>
	<div id="subjects">
		<SubjectAdder v-on:addSubject="addSubject"/>
		<SubjectBox 
			v-for="(subject, index) of subjects.filter(s => s.isShowing)" 
			:key="index" 
			:subject="subject" 
			:story="story"
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
			let strings = [];
			for (let title of titleString.split(",")) strings.push(title.trim());
			for (let subject of this.subjects) {
				if (subject.strings.every( e => strings.includes(e))) {
					subject.isShowing = true;
					return;
				}
			}

			let subject = {};
			subject.color = parser.randomColor();
			subject.strings = strings;
			subject.isShowing = true;

			this.removeStringsFromSubjects(subject.strings);

			this.subjects.push(subject);
		},
		changeStrings(subject, newString) {
			subject.strings = [];

			for (let string of newString.split(",")) subject.strings.push(string.trim());

			this.removeStringsFromSubjects(subject.strings, subject);

			parser.addSubjectsFromStory(this.story, this.subjects);
		},
		removeStringsFromSubjects(strings, excludeSubject={}) {
			for (let subject of this.subjects.filter(sub => sub != excludeSubject)) {
				subject.strings = subject.strings.filter(s => !strings.includes(s));
				if (subject.strings.length == 0) {
					this.subjects.splice(this.subjects.indexOf(subject), 1)
				}
			}
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