<template>
    <div>
        <vue-editor v-model="content" @text-change="saveChange"></vue-editor>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
    name: 'Wysiwig',
    components: {
        VueEditor
    },
    props: {
        value: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            content: null
        }
    },
    mounted() {
        this.content = this.value
    },
    methods: {
        saveChange() {
            this.$emit('input', this.content)
        }
    }
}
</script>
