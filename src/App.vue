<template>
    <v-app style=" background-color: rgb(250, 250, 250);">
        <app-bar></app-bar>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import {
    defineComponent
} from "@vue/composition-api";
import AppBar from "@/main/components/AppBar.vue";

export default defineComponent({
    name: "App",
    components: {
      AppBar,
    }
});
</script>
