<template>
    <div class="input-group-append">
        <button ref="calendar" class="btn btn-outline-secondary" type="button" :value="value">
            <font-awesome-icon icon="calendar-alt" />
        </button>
    </div>
</template>

<script>
import flatPickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'
export default {
    name: 'Datepicker',
    props: {
        value: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            fp: null
        }
    },
    watch: {
        value: 'updateCalendar'
    },
    beforeDestroy() {
        if (this.fp) {
            this.fp.destroy()
        }
    },
    mounted() {
        this.initCalendar()
    },
    methods: {
        initCalendar() {
            this.fp = flatPickr(this.$refs.calendar, {
                dateFormat: 'd.m.Y',
                onChange: (_, dateStr) => {
                    this.$emit('input', dateStr)
                }
            })
        },
        updateCalendar() {
            if (this.fp) {
                this.fp.setDate(this.value)
            }
        }
    }
}
</script>
<style scoped lang="less">
.flatpickr-input.form-control[readonly] {
    background: none;
}
</style>
