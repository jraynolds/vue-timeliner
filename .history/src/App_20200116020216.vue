<template>
  <v-app>
    
    <Head :views="views" />

    <v-content>
      <v-row style="height: 100%;">
        <v-col class="column">

          <Notes 
            v-if="notes.isShowing" 
            v-on:updateNotes="updateNotes" />

        </v-col>
        <v-col class="column">

          <Timeline 
            v-if="timeline.isShowing"
            :story="story" 
            :subjects="subjects" />

        </v-col>
        <v-col class="column">

          <Subjects v-if="subjects.isShowing" />

        </v-col>
        <v-col class="column">

         <Web v-if="web.isShowing" />

        </v-col>
        <v-col class="column">

         <Appearances v-if="appearances.isShowing" />

        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import Head from './components/Head';
import Notes from './components/Notes';
import Timeline from './components/Timeline';
import Subjects from './components/Subjects';
import Web from './components/Web';
import Appearances from './components/Appearances';

import parser from './assets/scripts/storyParsing'

export default {
  name: 'App',
  components: {
    Head,
    Notes,
    Timeline,
    Subjects,
    Web,
    Appearances
  },
  data() {
    return {
      views: [
        {
          title: "Notes",
          isShowing: true
        },
        {
          title: "Timeline",
          isShowing: true
        },
        {
          title: "Subjects",
          isShowing: true
        },
        {
          title: "Web",
          isShowing: true
        },
        {
          title: "Appearances",
          isShowing: true
        },
      ],
      subjects: [],
      story: {}
    }
  },
  methods: {
    updateNotes(notes) {
      this.story = parser.notesToStory(notes);
    }
  }
};
</script>

<style scoped>
.column>div {
  height: 100%;

  border: 1px solid black;
}
</style>