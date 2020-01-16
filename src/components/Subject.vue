<template>
	<span
		:style="hoverStyle"
		@mouseover="hoverSubjects(true)"
		@mouseleave="hoverSubjects(false)"
	>{{ string }}</span>
</template>

<script>
export default {
	props: [ "string", "subjects" ],
	computed: {
		hoverStyle() {
			let smallestSubject = this.getSmallestHoveredSubject();
			if (smallestSubject) {
				return { color: smallestSubject.color, cursor: "pointer" };
			} else {
				return {};
			}
		}
	},
	methods: {
		getSmallestHoveredSubject() {
			let smallestSubject;
			let smallestString;
			for (let subject of this.subjects.filter(s => s.isHovered)) {
				for (let string of subject.strings) {
					if (string.includes(this.string)) {						
						if (!smallestString || string.length < smallestString.length) {
							smallestSubject = subject;
							smallestString = string;
						}
					}
				}
			}

			return smallestSubject;
		},
		hoverSubjects(isHovered) {
			for (let s of this.subjects) s.isHovered = isHovered;
		}
	}
}
</script>