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
		chapter.title = chapterIndices[chapterIndices.length-1];
		chapter.events = splitNotes.slice(chapterIndices[chapterIndices.length-1]+1);
		story.chapters.push(chapter);

    return story;
  },
  containsLowercase(string) {
    return string.match(/[a-z]/);
  }
}