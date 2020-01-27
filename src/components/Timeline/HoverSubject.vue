<template>
	<span class="hoverSubject"
		:style="hoverStyle"
		@mouseover="hoverSubject(true)"
		@mouseleave="hoverSubject(false)"
		@click="clickSubject"
	>{{ string }}</span>
</template>

<script>
export default {
	props: [ "string", "subjects" ],
	computed: {
		hoverStyle() {
			for (let subject of this.orderedSubjects) {
				if (subject.isHovered) return { color: subject.color };
			}
			for (let subject of this.orderedSubjects) {
				if (subject.isShowing) return { color: subject.color };
			}
			return {};
		},
		orderedSubjects() {
			let vm = this;
			return [...this.subjects].sort(function(a, b) {
				let aString = a.strings.find(s => s.includes(vm.string));
				let bString = b.strings.find(s => s.includes(vm.string));
				return aString.length - bString.length;
			});
		}
	},
	methods: {
		smallestSubject() {
			let smallest;
			let smallestString;
			for (let subject of this.subjects) {
				for (let string of subject.strings) {
					if (!string.includes(this.string)) continue;  
					if (!smallestString || string.length < smallestString.length) {
						smallest = subject;
						smallestString = string;
					}
				}
			}

			return smallest;
		},
		hoverSubject(isHovered) {
			this.smallestSubject().isHovered = isHovered;
		},
		clickSubject() {
			let subject = this.subjects.find(s => s.isHovered);
			subject.isShowing = !subject.isShowing;
		}
	}
}
</script>

<style scoped>
.hoverSubject {
	cursor: pointer;
}
</style>