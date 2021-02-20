<template>
    <v-app style=" background-color: rgb(250, 250, 250);">
        <app-bar @pathChange="pathChange"></app-bar>
        <v-main>
<!--            <router-view />-->
            <inspector-page
                v-if="data != null"
                :data="data"
                :url="url"
            ></inspector-page>
        </v-main>
    </v-app>
</template>

<script lang="ts">

import {
    defineComponent, onMounted, Ref, ref, SetupContext,
} from "@vue/composition-api";
import AppBar from "@/main/components/AppBar.vue";
import InspectorPage from "@/main/views/inspector/InspectorPage.vue";
import axios from "axios";
import {ApiDoc} from "@/main/impl/ApiDoc";
import {IApiDoc} from "@/main/api/IApiDoc";
import {response1} from "@/main/views/response1";

export default defineComponent({
    name: "App",
    components: {
      AppBar,
        InspectorPage
    },
    setup(_, context: SetupContext) {
        const data :Ref<ApiDoc | null> = ref(null)
        const url :Ref<string > = ref("")

        async function pathChange(path:string) {
            console.log(path)
            // fetch data
           /** const response = await axios.get(path, {
                'mode': 'cors',
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                }
            });
            console.log(response);*/

           const response = await fetch(path, {
                'mode': 'cors',
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                }
           });

           /*if(response.data) {
              // console.log(response.data);
              // data.value = new ApiDoc(response.data);
           }*/
        }

        onMounted(() => {
            data.value = new ApiDoc(response1);
            //url.value = "http://storm.ddns.net:2759/v3/api-docs";
            url.value = "http://localhost:8080/v3/api-docs";
        })

        return {
            pathChange,
            data,
            url
        };
    }
});
</script>
