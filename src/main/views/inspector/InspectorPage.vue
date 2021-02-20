<template>
    <div class="py-3 pt-0">
        <div style="margin: 50px 0;" class="px-5">
            <h2>{{data.getInfoTitle()}}</h2>
            <pre style="font-size: 12px" v-text="getPreData()"></pre>
            <a
                target="_blank"
                :href="url"
                style="font-size: 12px;"
            >
                {{url}}
            </a>

            <p style="margin: 1em auto;">This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.</p>
        </div>

        <div class="scheme">

        </div>

        <!------------------------------------------------------------>
        <!-- GROUP                                                  -->
        <!------------------------------------------------------------>
        <v-expansion-panels multiple flat class="px-2">
            <v-expansion-panel
                v-for="(group,i) in data.getGroups()"
                :key="i"
                class="expansion-panel mb-1"
            >
                <v-expansion-panel-header class="expansion-panel-header pa-0 pb-3 pl-3">
                    <span class="expansion-panel-header-title mr-3">{{group.getTitle()}}</span>
                    <span>Everything about your Pets</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="expansion-panel-content pt-1 px-0">

                    <!------------------------------------------------------------>
                    <!-- ENDPOINTS                                              -->
                    <!------------------------------------------------------------>
                    <v-expansion-panels flat>
                        <v-expansion-panel
                            v-for="(endpoint,i) in group.getPaths()"
                            :key="i"
                            class="expansion-panel-child mb-1"
                            :style="{
                                'background-color': getTypeColor(endpoint.getPathType()).background,
                                'border': '1px solid ' + getTypeColor(endpoint.getPathType()).border
                            }"
                        >
                            <v-expansion-panel-header class="expansion-panel-child-header pa-0 pr-2">
                                <!-- API Type -->
                                <v-chip
                                    :color="getTypeColor(endpoint.getPathType()).chipColor"
                                    label
                                    class="white--text expansion-panel-child-chip"
                                >
                                    {{endpoint.getPathType()}}
                                </v-chip>
                                <!-- API Path -->
                                <span class="expansion-panel-child-header-title mr-1">{{endpoint.getPathUrl()}}</span>

                                <!-- API Description -->
                                <span style="font-size: 13px">{{endpoint.getPathSummary()}}</span>

                                <template v-slot:actions>
                                    <v-icon size="20" color="rgb(122, 127, 133)">
                                        mdi-lock
                                    </v-icon>
                                </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="pt-4">
                                <p>{{endpoint.getPathDescription()}}</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <!-- End ENPOINTS -->

                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

    </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";
import {ApiDoc} from "@/main/impl/ApiDoc";

export default defineComponent({
    name: "HomePage",
    components: {
    },
    props: {
        data: {
            type: ApiDoc,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    setup(props) {

        function getPreData() {
            const server = props.data.getServers();
            console.log(server)
            return "[ Base URL: " + server[0].getServerUrl() + " ]";
        }

        function getTypeColor(type:string) {
            switch (type) {
                case "GET":
                    return {chipColor: '#61affe', background: 'rgba(97,175,254,.1)', border: '#61affe'};
                case "POST":
                    return {chipColor: '#49cc90', background: 'rgba(73, 204, 144, 0.1)', border: 'rgb(73, 204, 144)'}
                case "PUT":
                    return {chipColor: '#fca130', background: 'rgba(252,161,48,.1)', border: '#fca130'};
                case "DELETE":
                    return {chipColor: '#f93e3e', background: 'rgba(249,62,62,.1)', border: '#f93e3e'};
            }
        }
        return {
            getTypeColor,
            getPreData
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

.scheme {
    height: 80px;
    margin: 0 0 35px;
    padding: 30px 0;
    background: #fff;
    box-shadow:0 1px 2px 0 rgba(0,0,0,.15);
}

/*********************************************************/
/** GROUPS                                              **/
/*********************************************************/
.expansion-panel {
    padding: 10px 20px 10px 10px;
    background-color: transparent !important;
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

/*********************************************************/
/** ENDPOINTS                                           **/
/*********************************************************/

.expansion-panel-child {
    margin: 0 0 15px !important;
    /*height: 38px !important;*/
    border-radius: 4px;
    padding: 5px;
}

.expansion-panel-child-chip {
    max-width: 80px !important;
    max-height: 28px !important;
    font-size: 14px;
    font-weight: 700;
    min-width: 80px;
    padding: 6px 15px;
    text-align: center;
    font-family: sans-serif;
    color: #fff;
}

.expansion-panel-child-chip >>> .v-chip__content{
    text-align: center !important;
}

.expansion-panel-child-header {
    min-height: fit-content !important;
}
.expansion-panel-child-header-title {
    max-width: fit-content;
    color: rgb(59, 65, 81);
    font-size: 16px;
    padding: 0 10px;
    font-family: monospace;
    font-weight: 600 !important;
}
</style>
