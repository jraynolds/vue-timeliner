<template>
  <v-app>
    
    <Head :views="views" />

    <v-content>
      <v-row style="height: 100%;">
        <v-col class="column" v-if="views[0].isShowing">

          <Notes v-on:updateNotes="updateNotes" />

        </v-col>
        <v-col class="column" v-if="views[1].isShowing">

          <Timeline 
            :story="story" 
            :subjects="subjects" />

        </v-col>
        <v-col class="column" v-if="views[2].isShowing">

          <Subjects />

        </v-col>
        <v-col class="column" v-if="views[3].isShowing">

         <Web />

        </v-col>
        <v-col class="column" v-if="views[4].isShowing">

         <Appearances />

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