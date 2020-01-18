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

			this.removeStringsFromSubjects(subject.strings);

			this.subjects.push(subject);
		},
		changeStrings(subject, newString) {
			subject.strings = [];

			for (let string of newString.split(",")) subject.strings.push(string.trim());

			this.removeStringsFromSubjects(subject.strings, subject);
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