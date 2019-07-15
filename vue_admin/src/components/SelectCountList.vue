<template>
    <div class="row">
        <div class="col">
            <div class="form-group col-md-4">
                <input
                    id="countEl"
                    v-model="localCount"
                    type="number"
                    min="1"
                    class="form-control"
                />
                <label for="countEl">Выбрано элементов на страницу</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SelectCountList',
    model: {
        prop: 'count'
    },
    props: {
        count: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            localCount: this.count
        }
    },
    watch: {
        localCount(val) {
            this.$emit('input', +val)
        }
    }
}
</script>
