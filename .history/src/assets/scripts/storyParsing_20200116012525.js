export default {
  notesToStory(notes) {
    let story = {};

    let splitNotes = notes.split(/\n\n/);
    
      // eslint-disable-next-line no-console
    console.log(splitNotes);

    return story;
  }
}