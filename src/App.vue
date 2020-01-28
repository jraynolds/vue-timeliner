<template>
  <v-app>
    
    <Head :views="views" />

    <v-content>
      <v-row id="main" class="px-6">
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
              :story="story" 
              :subjects="subjects"/>

          </v-col>
        </transition>
        <transition name="fade">
          <v-col class="column" v-if="views[3].isShowing">

            <Web />

          </v-col>
        </transition>
        <transition name="fade">
          <v-col class="column" v-if="views[4].isShowing">

            <Appearances 
              :story="story"
              :subjects="subjects" />

          </v-col>
        </transition>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import Head from './components/Head/Head';
import Notes from './components/Notes';
import Timeline from './components/Timeline/Timeline';
import Subjects from './components/Subjects/Subjects';
import Web from './components/Web';
import Appearances from './components/Appearances/Appearances';

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
          isShowing: false
        },
        {
          title: "Subjects",
          isShowing: false
        },
        {
          title: "Web",
          isShowing: false
        },
        {
          title: "Appearances",
          isShowing: true
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
          isShowing: false,
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
.v-content {
  height: 100vh;
}

#main {
  height: 100%;
}

.column {
  height: 100%;

  overflow-y: auto;
  box-sizing: border-box;
}

.column>div {
  height: 100%;

  border: 1px solid black;
  box-sizing: border-box;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>