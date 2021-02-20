<template>
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
            <v-expansion-panel-header
                class="expansion-panel-child-header pa-0 pr-2"
            >
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
            <v-expansion-panel-content
                class="pt-4"
                :style="{'border-top': '1px solid ' + getTypeColor(endpoint.getPathType()).border}"
            >
                <div class="description-wrapper">
                    <p class="mb-0">{{endpoint.getPathDescription()}}</p>
                </div>

                <endpoint-section
                    title="Parameters"
                    :headers="['Name', 'Description']"
                ></endpoint-section>

                <endpoint-section
                    title="Responses"
                    :headers="['Code', 'Description']"
                    :data="endpoint.getResponseJson()"
                ></endpoint-section>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script lang="ts">
import {ApiDocGroup} from "@/main/impl/ApiDocGroup";
import {defineComponent} from "@vue/composition-api";
import EndpointSection from "@/main/views/inspector/EndpointSection.vue";

export default defineComponent({
    name: "SchemeEndpoint",
    components: {
        EndpointSection
    },
    props: {
        group: {
            type: ApiDocGroup,
            required: true
        }
    },
    setup() {
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
            getTypeColor
        }
    }
})
</script>

<style scoped>

.expansion-panel-child {
    margin: 0 0 15px !important;
    /*height: 38px !important;*/
    border-radius: 4px;
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
    flex-direction: column-reverse;
}

.expansion-panel-child-chip >>> .v-chip__content{
    text-align: center !important;
}

.expansion-panel-child-header {
    min-height: fit-content !important;
    padding: 5px !important;
}
.expansion-panel-child-header-title {
    max-width: fit-content;
    color: rgb(59, 65, 81);
    font-size: 16px;
    padding: 0 10px;
    font-family: monospace;
    font-weight: 600 !important;
}

.description-wrapper {
    font-size: 14px;
    margin: 0 0 5px;
    padding: 15px 20px 20px;
    font-family: sans-serif;
    color: #3b4151;
}
</style>
