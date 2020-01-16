<template>
  <v-app>
    
    <Head/>

    <v-content>
      <v-row style="height: 100%;">
        <v-col class="column">

          <Notes v-on:updateNotes="updateNotes" />

        </v-col>
        <v-col class="column">

          <Timeline :story="story" :subjects="subjects" />

        </v-col>
        <v-col class="column">

          <Subjects/>

        </v-col>
        <v-col class="column">

         <Web/>

        </v-col>
        <v-col class="column">

         <Appearances/>

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
      subjects: [],
      story: {}
    }
  },
  methods: {
    updateNotes(notes) {
      // eslint-disable-next-line no-console
      console.log(notes);
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