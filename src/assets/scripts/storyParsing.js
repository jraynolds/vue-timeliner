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
            subject.strings = [word];
            subject.color = this.randomColor();
            subject.isShowing = false;
            subject.isHovered = false;

            subjects.push(subject);
          }
        }
      }
    }
  },
  randomColor(minSaturation = 50, minLightness = 50) {
    return `hsl(${this.rand(1, 360)},${this.rand(minSaturation, 100)}%,${this.rand(minLightness, 80)}%)`;
  },
  rand(min, max) {
    return min + Math.random() * (max - min);
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
  getSubjectsAtIndices(subjects, fullstring) {
    let includedSubjects = [];
    for (let subject of subjects) {
      for (let string of fullstring) {
        if (fullstring.includes(string)) {
          includedSubjects.push(subject);
          continue;
        }
      }
    }

    let split = fullstring.split(/\b/);
    let indices = [];
    for (let s of split) {
      let obj = {};
      obj.string = s;
      obj.subjects = [];
      indices.push(obj);
    }

    for (let i=0; i<split.length; i++) {
      for (let subject of includedSubjects) {
        for (let string of subject.strings) {
          let splitString = string.split(/\b/);
          if (split[i] == splitString[0] && !indices[i].subjects.includes(subject)) { 
            // We've found a match.
            // Does it follow the pattern we want, if we look ahead?
            if (i + splitString.length - 1 > split.length) continue;
            if (split.slice(i, i + splitString.length).join("") == string) {
              for (let z=0; z<splitString.length; z++) {
                indices[i+z].subjects.push(subject);
              }
            }
          }
        }
      }
    }

    return indices;
  },
  containsLowercase(string) {
    return string.match(/[a-z]/);
  },
  isCapitalizedWord(string) {
      return /[A-Z]/.test(string.slice(0, 1));
  }
}