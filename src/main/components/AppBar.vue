<template>
    <v-app-bar
        dark
        app
        color="#1b1b1b"
        elevate-on-scroll
        height="60px"
        class="px-1"
    >
        <v-toolbar-title @click="gotoHome()" style="cursor:pointer;">Api Docs</v-toolbar-title>

        <v-spacer></v-spacer>

        <form  class="d-flex search" style=" flex: 3">
            <input
                v-model="path"
                @keyup.enter="goToInspector( path)"
                type="text"
                class="pl-3"
            >
            <v-btn
                @click="goToInspector( path)"
                class="download-url-button"
            >
                Explore
            </v-btn>
        </form>
    </v-app-bar>
</template>

<script lang="ts">
import {defineComponent, Ref, ref, SetupContext} from "@vue/composition-api";

export default defineComponent({
    name: "AppBar",
    setup(_, context:SetupContext) {
        /***
         *
         */
        const path:Ref<string> = ref(  "");

        function goToInspector(path:string) {
            context.root.$router.push({path: "/api-docs", query: {url: path}})
        }

        function gotoHome() {
            context.root.$router.push({path: "/"})
        }

        return {
            path,
            goToInspector,
            gotoHome
        }
    }
})
</script>

<style scoped>
.search {
    height: 38px;
}
.download-url-button {
    font-size: 16px !important;
    font-weight: 700 !important;
    padding: 4px 30px;
    height: 38px !important;
    border-radius: 0 4px 4px 0;
    background: #62a03f !important;
    font-family: sans-serif;
    text-transform: inherit !important;
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
