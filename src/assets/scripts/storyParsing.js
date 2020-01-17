export default {
  notesToStory(notes) {
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
  addEventsToSubjects(subjects, story) {
    for (let subject of subjects) {
      subject.events = [];
      for (let chapter of story.chapters) {
        for (let event of chapter.events) {
          for (let string of subject.strings) {
            if (event.includes(string) && !subject.events.includes(event)) {
              subject.events.push(event);
            }
          }
        }
      }
    }
  },
  containsLowercase(string) {
    return string.match(/[a-z]/);
  }
}