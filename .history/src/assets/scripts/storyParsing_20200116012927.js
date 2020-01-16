export default {
  notesToStory(notes) {
    let story = {};

    let splitNotes = notes.split(/\n\n/);
    
    story.title = splitNotes[0];
    splitNotes = splitNotes.slice(1);
    // eslint-disable-next-line no-console
    console.log(splitNotes);
    
    // let indices = [];
    // for (let )

    return story;
  },
  containsLowercase(string) {
    return string.match(/[a-z]/);
  }
}