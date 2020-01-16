<template>
	<div id="timeline">
		<Chapter 
			v-for="chapter of story.chapters" 
			:key="chapter.title" 
			:chapter="chapter" 
			:subjects="subjects"
		/>
	</div>
</template>

<script>
import Chapter from "@/components/Chapter.vue"

export default {
	props: [ "story", "userSubjects" ],
	components: {
			Chapter
	},
	data() {
		return {
			subjects: [],
			escapedWords: ["the", "von", "le", "vi"]
		}
	},
	watch: {
		story: function() {
			let usedWords = [];
			let newWords = [];

			if (this.userSubjects) for (let subject of this.userSubjects) {
				usedWords.append(...subject.words);
			}

			for (let chapter of this.story.chapters) {
				for (let event of chapter.events) {
					let propers = this.getProperWords(event, usedWords);
					for (let proper of propers) {
						usedWords.push(proper);
						newWords.push(proper);
					}
				}
			}

			for (let word of newWords) {
				let subject = {};
				subject.color = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
				subject.strings = [];
				subject.strings.push([word]);
				subject.isHovered = false;
				subject.isFocused = false;
				this.subjects.push(subject);
			}
		}
	},
	methods: {
		getProperWords(string, used) {
			let propers = [];
		
			let split = string.split(/\b/);
			split = split.filter(s => s != " ");

			for (let a=0; a<split.length; a++) {
				let startingWord = split[a];
				let words = [startingWord];
				if (!this.isCapitalizedWord(startingWord)) continue; // Skip this word if it's not a capital word.
				for (let b=a+1; b<split.length; b++) { // Move rightward in the sentence.
					let nextWord = split[b];
					if(!this.isCapitalizedWord(nextWord) && !this.escapedWords.includes(nextWord)) break; // We've reached the end of our search.
					words.push(nextWord); // Add this word to the stack.
				}

				for (let i=0; i<words.length; i++) {
					let lastWord = words.slice(i, i+1)[0];
					let string = words.slice(0, i+1).join(" ");
					if (used.includes(string) || this.escapedWords.includes(lastWord)) continue;
					used.push(string);
					propers.push(string);
				}
			}

			return propers;
		},
		isCapitalizedWord(string) {
				return /[A-Z]/.test(string.slice(0, 1));
		}
	}
}
</script>

<style lang="scss" scoped>
#timeline {
    display: flex;
}
</style>