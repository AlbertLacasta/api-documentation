<template>
    <div>
        <div class="d-flex header" style="background: hsla(0,0%,100%,.8)">
            <h4 class="section-title">{{title}}</h4>

            <v-spacer></v-spacer>

            <v-btn
                small
                text
                class="btn-action"
                @click="$emit('emitAction')"
            >
                Try it out
            </v-btn>
        </div>

        <table
            v-if="data && data.length > 0"
            style="width: 100%; border-spacing: 0px; padding: 20px;"
        >
            <thead>
                <tr>
                    <th
                        v-for="(header, index) in headers"
                        :key="index"
                        :style="index == 1 ? 'width: 99%;' : ''"
                        style="font-size: 14px"
                    >
                        {{header}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(row, index) in data"
                    :key="index"
                >
                    <td class="name">{{row.name}}</td>
                    <td>
                        <p class="description">{{row.description}}</p>
                        <pre class="preview-response">{{row.content}}</pre>
                    </td>
                </tr>
            </tbody>
        </table>

        <p v-else class="no-data">No {{title.toLowerCase()}}</p>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
    name: "EndpointSection",
    props: {
        title: {
            type: String,
            required: true
        },
        headers: {
            type: Array,
            required: true
        },
        data: {
            type: Array
        }
    }
})
</script>

<style scoped>
.section-title {
    font-size: 14px;
    flex: 1;
    margin: 0;
    font-family: sans-serif;
    color: #3b4151;
}

.header {
    padding: 8px 20px;
    min-height: 50px;
    align-items: center;
}

th {
    font-size: 12px;
    font-weight: 700;
    padding: 12px 0;
    text-align: left;
    border-bottom: 1px solid rgba(59,65,81,.2);
    font-family: sans-serif;
    color: #3b4151;
}

.preview-response {
    overflow-y: auto;
    max-height: 400px;
    min-height: 6em;
    font-size: 12px;
    margin: 0;
    padding: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-all;
    hyphens: auto;
    border-radius: 4px;
    background: #41444e;
    overflow-wrap: break-word;
    font-family: monospace;
    font-weight: 600;
    color: #fff;
}

.description {
    font-family: sans-serif;
    color: #3b4151;
    margin: 1em auto;
}

.name {
    min-width: 6em;
    vertical-align: top;
    padding: 10px 0;
    font-size: 14px;
    font-family: sans-serif;
    color: #3b4151;
}

.no-data {
    font-size: 14px;
    margin: 0 0 5px;
    padding: 15px 20px 45px;
    font-family: sans-serif;
    color: #3b4151 !important;
}

.btn-action {
    font-size: 14px !important;
    font-weight: 700;
    padding: 5px 23px;
    transition: all .3s;
    border: 2px solid grey;
    border-radius: 4px;
    font-family: sans-serif;
    color: #3b4151;
    text-transform: initial !important;
}
</style>
