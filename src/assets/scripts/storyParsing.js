export default {
  escapedWords: ["the", "von", "le", "vi"],
  getStoryFromNotes(notes) {
		let story = {};
		story.chapters = [];

    let splitNotes = notes.split(/\n\n/);
    
    story.title = splitNotes[0];
    splitNotes = splitNotes.slice(1);
    
    let chapterIndices = [];
    for (let i=0; i<splitNotes.length; i++) {
      if (!this.containsLowercase(splitNotes[i])) chapterIndices.push(i);
    }

    for (let i=0; i<chapterIndices.length-1; i++) {
			let chapter = {};
			chapter.title = splitNotes[chapterIndices[i]];
			chapter.events = splitNotes.slice(chapterIndices[i], chapterIndices[i+1]);
			story.chapters.push(chapter);
		}
		let chapter = {};
		chapter.title = splitNotes[chapterIndices[chapterIndices.length-1]];
		chapter.events = splitNotes.slice(chapterIndices[chapterIndices.length-1]+1);
		story.chapters.push(chapter);

    return story;
  },
  addSubjectsFromStory(story, subjects) {
    for (let chapter of story.chapters) {
      for (let event of chapter.events) {
        let words = this.getProperWords(event);
        let strings = this.getStringsFromSubjects(subjects);
        for (let word of words) {
          if (!strings.includes(word)) {
            let subject = {};
            subject.strings = word;
            subject.color = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
            subject.isShowing = false;
          }
        }
      }
    }
  },
  getStringsFromSubjects(subjects) {
    let strings = [];
    for (let subject of subjects) {
      for (let string of subject.strings) {
        strings.push(string);
      }
    }
    return strings;
  },
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
        if ((used && used.includes(string)) || this.escapedWords.includes(lastWord)) continue;
        if (used) used.push(string);
        propers.push(string);
      }
    }

    return propers;
  },
  containsLowercase(string) {
    return string.match(/[a-z]/);
  },
  isCapitalizedWord(string) {
      return /[A-Z]/.test(string.slice(0, 1));
  }
}