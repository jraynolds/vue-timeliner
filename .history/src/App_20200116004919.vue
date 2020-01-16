<template>
  <v-app>
    
    <Head/>

    <v-content>
      <v-row style="height: 100%;">
        <v-col class="column" cols="2">

          <Notes/>

        </v-col>
        <v-col class="column" cols="2">

          <Timeline :subjects="subjects"/>

        </v-col>
        <v-col class="column" cols="2">

          <Subjects/>

        </v-col>
        <v-col class="column" cols="2">

         <Web/>

        </v-col>
        <v-col class="column" cols="2">

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
  }
};
</script>

<style scoped>
.column>div {
  height: 100%;

  border: 1px solid black;
}
</style>