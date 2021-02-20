<template>
    <div class="scheme d-flex"  style="padding: 25px 20px;">
        <div>
            <span class="scheme-title">Servers</span>
            <br>
            <select  v-model="apiDoc.server" class="select-scheme">
                <option
                    v-for="(server, index) in servers"
                    :key="index"
                    :value="server.value"
                >
                    {{server.text}}
                </option>
            </select>
        </div>
        <v-spacer></v-spacer>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "@vue/composition-api";
import {ApiDoc} from "@/main/impl/ApiDoc";

export default defineComponent({
    name: "InspectorPageScheme",
    props: {
        apiDoc: {
            type: ApiDoc,
            required: true
        }
    },
    setup(props) {

        /**
         *
         */
        const servers = computed(() => {
            return props.apiDoc.getServers().map((server) => {
                return {
                    text: server.getServerUrl() + ' - ' + server.getServerDescription(),
                    value: server
                }
            });
        })

        return {
            servers
        }
    }
})
</script>

<style scoped>

.scheme {
    margin: 0 0 35px;
    background: #fff;
    box-shadow:0 1px 2px 0 rgba(0,0,0,.15);
}

.scheme-title {
    color: rgb(59, 65, 81);
    display: inline;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
}

.select-scheme {
    font-size: 14px;
    font-weight: 700;
    padding: 2px 40px 2px 10px;
    border: 2px solid #41444e;
    border-radius: 4px;
    background: #f7f7f7 url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZD0iTTEzLjQxOCA3Ljg1OWEuNjk1LjY5NSAwIDAxLjk3OCAwIC42OC42OCAwIDAxMCAuOTY5bC0zLjkwOCAzLjgzYS42OTcuNjk3IDAgMDEtLjk3OSAwbC0zLjkwOC0zLjgzYS42OC42OCAwIDAxMC0uOTY5LjY5NS42OTUgMCAwMS45NzggMEwxMCAxMWwzLjQxOC0zLjE0MXoiLz48L3N2Zz4=) right 10px center no-repeat;
    background-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 2px 0px;
    font-family: sans-serif;
    color: #3b4151;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
}
</style>
