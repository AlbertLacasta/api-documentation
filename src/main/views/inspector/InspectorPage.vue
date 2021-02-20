<template>
    <v-progress-circular
        v-if="data == null"
        :size="50"
        color="primary"
        indeterminate
    ></v-progress-circular>

    <div v-else class="pt-0">
        <div style="margin: 45px 0;" class="px-5">
            <h2>{{data.getInfoTitle()}}</h2>
            <pre style="font-size: 12px" v-text="getPreData()"></pre>
            <a
                target="_blank"
                :href="url"
                style="font-size: 12px;"
            >
                {{url}}
            </a>

            <p style="margin: 1em auto;">{{data.getInfoDescription()}}</p>
        </div>

        <inspector-page-server :apiDoc="data"></inspector-page-server>

        <!------------------------------------------------------------>
        <!-- GROUP                                                  -->
        <!------------------------------------------------------------>
        <v-expansion-panels multiple flat class="px-2">
            <v-expansion-panel
                v-for="(group,i) in data.getGroups()"
                :key="i"
                class="expansion-panel mt-0"
            >
                <v-expansion-panel-header class="expansion-panel-header pa-0 pb-3 pl-3">
                    <span class="expansion-panel-header-title mr-3">{{group.getTitle()}}</span>
                    <span>Everything about your Pets</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="expansion-panel-content pt-1 px-0">
                    <!------------------------------------------------------------>
                    <!-- ENDPOINTS                                              -->
                    <!------------------------------------------------------------>
                    <scheme-endpoint :group="group"></scheme-endpoint>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, Ref, SetupContext, watch} from "@vue/composition-api";
import {ApiDoc} from "@/main/impl/ApiDoc";
import InspectorPageServer from "@/main/views/inspector/InspectorPageServer.vue";
import axios from "axios";
import SchemeEndpoint from "@/main/views/inspector/SchemeEndpoint.vue";

export default defineComponent({
    name: "HomePage",
    components: {
        SchemeEndpoint,
        InspectorPageServer
    },
    setup(props, context: SetupContext) {
        const data :Ref<ApiDoc | null> = ref(null)

        const url :Ref<string > = ref("")

        function getPreData() {
            if(data.value) {
                return "[ Base URL: " + data.value?.server.getServerUrl() + " ]";
            }
            return "";
        }

        async function fetchData(path:string) {
            const response = await axios.get(path,
                {
                    'headers': {
                        'Access-Control-Allow-Origin': '*',
                    }
                }
            );

            if(response.data) {
                data.value = new ApiDoc(response.data);
            }
        }

        watch(
            () => context.root.$route,
            (route: any) => {
                url.value = route.query.url;
                fetchData(route.query.url);
            }
        )

        return {
            getPreData,
            data,
            url
        }
    }
})
</script>

<style scoped>
h2 {
    font-size: 36px;
    margin: 0;
    font-family: sans-serif;
    color: #3b4151;
}

/*********************************************************/
/** GROUPS                                              **/
/*********************************************************/
.expansion-panel {
    padding: 10px 20px 10px 10px;
    background-color: transparent !important;
    border-radius: 0px !important;
}

.expansion-panel:hover {
    background: rgba(0,0,0,.02) !important;
}

.expansion-panel-header {
    border-bottom: 1px solid rgba(59,65,81,.3);
}
.expansion-panel-header-title {
    max-width: fit-content !important;
    font-size: 24px;
    margin: 0 0 5px;
    font-family: sans-serif;
    color: #3b4151;
    font-weight: 700;
}

.expansion-panel-content >>> .v-expansion-panel-content__wrap{
    padding: 0px !important;
}

</style>
