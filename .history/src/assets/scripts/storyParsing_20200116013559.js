export default {
  notesToStory(notes) {
    let story = {};

    let splitNotes = notes.split(/\n\n/);
    
    story.title = splitNotes[0];
    splitNotes = splitNotes.slice(1);
    // eslint-disable-next-line no-console
    console.log(splitNotes);
    
    let chapterIndices = [];
    for (let i=0; i<splitNotes.length; i++) {
      if (!this.containsLowercase(splitNotes[i])) chapterIndices.push(i);
    }
    // eslint-disable-next-line no-console
    console.log(chapterIndices);

    for (let i=0; i<chapterIndices.length; i++) {
      
    }

    // eslint-disable-next-line no-console
    console.log(story);
    return story;
  },
  containsLowercase(string) {
    return string.match(/[a-z]/);
  }
}