<template>
    <v-app-bar
        dark
        app
        color="#1b1b1b"
        elevate-on-scroll
        height="60px"
        class="px-1"
    >
        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <form  class="d-flex search" style=" flex: 3">
            <input v-model="path" type="text">
            <button
                @click="$emit('pathChange', path)"
                class="download-url-button"
            >
                Explore
            </button>
        </form>
    </v-app-bar>
</template>

<script lang="ts">
import {defineComponent, Ref, ref} from "@vue/composition-api";

export default defineComponent({
    name: "AppBar",
    setup() {
        /***
         *
         */
        const path:Ref<string | null> = ref(null);


        return {
            path
        }
    }
})
</script>

<style scoped>
.search {
    height: 38px;
}
.download-url-button {
    font-size: 16px;
    font-weight: 700;
    padding: 4px 30px;
    border: none;
    border-radius: 0 4px 4px 0;
    background: #62a03f;
    font-family: sans-serif;
    color: #fff;
}

input {
    width: 100%;
    margin: 0;
    border: 2px solid #62a03f;
    border-radius: 4px 0 0 4px;
    outline: none;
    background: #fff;
}
</style>
