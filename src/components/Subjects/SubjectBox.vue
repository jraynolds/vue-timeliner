<template>
  <transition name="fade">
    <div class="subjectBox pb-2"
      :style="{ backgroundColor: subject.color }">
      <v-row class="ma-0">
        <div class="pa-1 pl-1 pr-0" style="width: 28px;">
          <ColorPicker :subject="subject" style="height: 24px;"/>
        </div>
        <v-spacer/>
        <div class="pa-1 px-0 mr-n2 flex-0" style="flex-grow: 0; width: 30px;">
          <div class="windowButton" @click="setWindowStyle('min')" >-</div>
        </div>
        <div class="pa-1 px-0 mr-n2" style="flex-grow: 0; width: 30px;">
          <div class="windowButton" @click="setWindowStyle('max')" >+</div>
        </div>
        <div class="pa-1 px-0 mr-n2" style="flex-grow: 0; width: 30px;">
          <div class="windowButton" @click="setWindowStyle('med'); subject.isShowing = false;">X</div>
        </div>
      </v-row>
      <div :style="{color: textColor}">
        <v-row class="ma-0 px-2">
          <SubjectTitle 
            :strings="subject.strings"
            v-on:changeStrings="changeStrings" 
          />
        </v-row>
        <SubjectEvents :events="getEvents" :windowStyle="windowStyle" />
      </div>
    </div>
  </transition>
</template>

<script>
import ColorPicker from '@/components/Subjects/ColorPicker'
import SubjectTitle from '@/components/Subjects/SubjectTitle'
import SubjectEvents from '@/components/Subjects/SubjectEvents' 

export default {
  props: [ "subject", "story" ],
  components: {
    ColorPicker,
    SubjectTitle,
    SubjectEvents
  },
	data() {
		return {
      windowStyle: "med" // Can be med, max, min
		}
  },
  computed: {
    textColor() {
      let lightness = parseInt(this.subject.color.match(/\d+/g)[2]);
      if (lightness < 30) return "white";
      return "black";
    },
    getEvents() {
      let events = [];
      for (let chapter of this.story.chapters) {
        for (let event of chapter.events) {
          for (let string of this.subject.strings) {
            if (event.includes(string) && !events.includes(event)) events.push(event);
          }
        }
      }
      return events;
    }
  },
  methods: {
    setWindowStyle(style) {
      if (this.windowStyle == style) this.windowStyle = "med";
      else this.windowStyle = style;
    },
    changeStrings(string) {
      this.$emit('changeStrings', this.subject, string);
    }
  }
}
</script>

<style scoped>
.subjectBox {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  border-radius: 10px;
  border: 2px white dashed;
}

.windowButton {
  background-color: black;
  color: white;
  width: 18px;
  border-radius: 5px;

  font-size: .8em;
  text-align: center;

  user-select: none;
  cursor: pointer;
}

ul {
  max-height: 250px;
  overflow-y: auto;
  overflow-x: hidden;

  transition: max-height 1s;
}

h2 {
  color: black;
}

li {
  font-size: small;
}
</style>