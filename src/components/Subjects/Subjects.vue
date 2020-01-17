<template>
	<div id="subjects">
		<SubjectAdder v-on:addSubject="addSubject"/>
		<SubjectBox 
			v-for="(subject, index) of subjects.filter(s => s.isShowing)" 
			:key="index" 
			:subject="subject" />
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