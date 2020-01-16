<template>
	<v-app-bar
		color="black"
	>
		<v-row>
			<v-col>
				<h1 style="color: white;">{{ computedTitle }}</h1>
			</v-col>
			<v-spacer/>
			<v-row>
				<v-col class="button">
					<ToggleButton :view="views[0]"/>
				</v-col>
				<v-col class="button">
					<ToggleButton :view="views[1]"/>
				</v-col>
				<v-col class="button">
					<ToggleButton :view="views[2]"/>
				</v-col>
				<v-col class="button">
					<ToggleButton :view="views[3]"/>
				</v-col>
				<v-col class="button">
					<ToggleButton :view="views[4]"/>
				</v-col>
			</v-row>
		</v-row>
	</v-app-bar>
</template>

<script>
import ToggleButton from "@/components/ToggleButton.vue"

export default {
    props: [ "views", "userNotes" ],
    components: {
        ToggleButton
    },
    computed: {
        computedTitle() {
            if (this.userNotes) return this.userNotes.split("\n")[0];
            return "First line is the title."
        }
    }
}
</script>

<style scoped>
.button {
	width: 30px;
}
</style>