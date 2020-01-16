<template>
	<v-app-bar
		color="black"
	>
		<v-row>
			<v-col>
				<h1 style="color: white;">{{ computedTitle }}</h1>
			</v-col>
			<v-spacer/>
			<div class="buttons">
					<ToggleButton :view="views[0]"/>
					<ToggleButton :view="views[1]"/>
					<ToggleButton :view="views[2]"/>
					<ToggleButton :view="views[3]"/>
					<ToggleButton :view="views[4]"/>
			</div>
		</v-row>
	</v-app-bar>
</template>

<script>
import ToggleButton from "@/components/ToggleButton.vue"

export default {
    props: [ "views", "story" ],
    components: {
        ToggleButton
    },
    computed: {
        computedTitle() {
            if (this.story) return this.story.title;
            return "First line is the title."
        }
    }
}
</script>

<style scoped>
.buttons {
	width: 400px;
	padding-top: 10px;
	display: flex;
}
</style>