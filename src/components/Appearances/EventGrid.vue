<template>
  <div class="eventGrid" :style="gridStyle">
		<Bar v-for="(event, index) of chapter.events" 
			:key="event" 
			:type="'event'" 
			:title="event"
			:style="{ gridRowStart: index+1, gridRowEnd: index+2, gridColumnStart: centerIndex, gridColumnEnd: centerIndex+1 }" />
		<SubjectColumn v-for="(subject, index) of subjects"
			:key="index"
			:subject="subject"
			:chapter="chapter" 
			:style="{ gridRowStart: 1, gridRowEnd: chapter.events.length + 1, gridColumnStart: getColumn(index), gridColumnEnd: getColumn(index)+1, gridTemplateRows: `repeat(${chapter.events.length}, 1fr)` }" />
		<SubjectColumn v-if="subjects.length%2 != 0"
      :isHidden="true"
      :style="{ gridRow: '1/2', gridColumn: '1/2' }"  />
  </div>
</template>

<script>
import SubjectColumn from '@/components/Appearances/SubjectColumn'
import Bar from '@/components/Appearances/Bar'

export default {
  props: [ "chapter", "subjects" ],
  components: {
    SubjectColumn,
    Bar
	},
	computed: {
		centerIndex() {
      if (this.subjects.length == 1) return 2;
      return Math.ceil(this.subjects.length/2) + 1;
    },
		gridStyle() {
			let columns = "61px";
			for (let i=0; i<this.subjects.length; i++) {
				if (i%2==0) {
					columns += " 10px";
				} else {
					columns = "10px " + columns;
				}
			}
			if (this.subjects.length%2 != 0) columns = "10px " + columns;

			return { gridTemplateColumns: columns };
		}
	},
	methods: {
    getColumn(index) {
      if (index%2 == 0) { // if even, this is going right of center
        return this.centerIndex + index/2 + 1;
      } // if odd, left of center
      return this.centerIndex - Math.floor(index/2) - 1
    },
	}
}
</script>

<style scoped>
.eventGrid {
	margin-top: 10px;
	display: grid;

	grid-row-gap: 10px;
	grid-column-gap: 10px;

	justify-items: center;
}
</style>