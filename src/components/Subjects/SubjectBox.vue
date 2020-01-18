<template>
  <transition name="fade">
    <div class="subjectBox pb-2"
      :style="{ backgroundColor: subject.color}">
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
            :subject="subject"
            v-on:changeStrings="changeStrings" 
          />
        </v-row>
        <SubjectEvents :events="subject.events" :windowStyle="windowStyle" />
      </div>
    </div>
  </transition>
</template>

<script>
import ColorPicker from '@/components/Subjects/ColorPicker'
import SubjectTitle from '@/components/Subjects/SubjectTitle'
import SubjectEvents from '@/components/Subjects/SubjectEvents' 

export default {
  props: [ "subject" ],
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
      // eslint-disable-next-line no-console
      // console.log(this.subject);
      let lightness = this.getLightness(this.subject.color);
      if (lightness < 0.3) return "rgb(255, 255, 255)";
      return "rgb(0, 0, 0)";
    }
  },
  methods: {
    setWindowStyle(style) {
      if (this.windowStyle == style) this.windowStyle = "med";
      else this.windowStyle = style;
    },
    changeStrings(string) {
      this.$emit('changeStrings', this.subject, string);
    },
    RGBtoHSL(rgb) {
      let rgbArr = rgb.match(/\d+/g);

      let r = rgbArr[0] / 255;
      let g = rgbArr[1] / 255;
      let b = rgbArr[2] / 255;

      let cmin = Math.min(r, g, b);
      let cmax = Math.max(r, g, b);
      let delta = cmax - cmin;

      let h = 0;
      let s = 0;
      let l = 0;

      if (delta == 0) h = 0;
      else if (cmax == r) h = ((g - b) / delta) % 6;
      else if (cmax == g) h = ((b - r) / delta) + 2;
      else h = ((r - g) / delta) + 4;
      h = Math.round(h * 60);
      if (h < 0) h += 360;

      s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * 1 - 1));
      s = +(s * 100).toFixed(1);

      l = (cmax + cmin) / 2;
      l = +(l * 100) .toFixed(1);

      return `hsl(${h},${s}%,${l}%)`
    },
    getLightness(rgb) {
      let rgbArr = rgb.match(/\d+/g);

      let r = rgbArr[0] / 255;
      let g = rgbArr[1] / 255;
      let b = rgbArr[2] / 255;

      let cmin = Math.min(r, g, b);
      let cmax = Math.max(r, g, b);

      return (cmax + cmin) / 2;
    }
  }
}
</script>

<style scoped>
.subjectBox {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

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