<template>
  <v-app>
    
    <Head :views="views" />

    <v-content>
      <v-row class="px-6" style="height: 100%;">
        <transition name="fade">
          <v-col class="column" v-if="views[0].isShowing">

            <Notes v-on:updateNotes="updateNotes" />

          </v-col>
        </transition>
        <transition name="fade">
          <v-col class="column" v-if="views[1].isShowing">

            <Timeline 
              :story="story" 
              :subjects="subjects" />

          </v-col>
        </transition>
        <transition name="fade">
          <v-col class="column" v-if="views[2].isShowing">

            <Subjects 
              :subjects="subjects" 
              :story="story" />

          </v-col>
        </transition>
        <transition name="fade">
          <v-col class="column" v-if="views[3].isShowing">

            <Web />

          </v-col>
        </transition>
        <transition name="fade">
          <v-col class="column" v-if="views[4].isShowing">

            <Appearances />

          </v-col>
        </transition>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import Head from './components/Head';
import Notes from './components/Notes';
import Timeline from './components/Timeline/Timeline';
import Subjects from './components/Subjects/Subjects';
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
          isShowing: false
        },
        {
          title: "Appearances",
          isShowing: false
        },
      ],
      subjects: [
        {
          strings: [ "Try", "This" ],
          color: "rgb(255, 0, 0)",
          isShowing: true,
          isHovered: false
        },
        {
          strings: [ "Now" ],
          color: "rgb(34, 139, 34)",
          isShowing: true,
          isHovered: false
        }
      ],
      story: {
        chapters: [],
        title: ""
      }
    }
  },
  methods: {
    updateNotes(notes) {
      // eslint-disable-next-line no-console
      console.log("Updating");
      this.story = parser.getStoryFromNotes(notes);
      parser.addSubjectsFromStory(this.story, this.subjects);
    }
  }
};
</script>

<style>
.column>div {
  height: 100%;

  border: 1px solid black;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>