<template>
	<v-app-bar
		color="black"
		app
	>
		<v-row id="headerRow">
			<v-col id="title" class="pa-0">
				<h1 class="pl-2" style="color: white;">{{ computedTitle }}</h1>
			</v-col>
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
	width: 300px;
	padding-right: 5px;
	display: flex;
}

#headerRow, #title {
	height: 100%;
}
</style>