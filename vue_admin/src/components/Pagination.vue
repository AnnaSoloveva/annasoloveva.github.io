<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a
                    class="page-link"
                    aria-label="Previous"
                    @click.prevent="$emit('input', currentPage - 1)"
                >
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li
                v-for="page in start + range"
                :key="page"
                class="page-item"
                :class="{ active: currentPage === page }"
            >
                <a v-if="page > start" class="page-link" @click.prevent="$emit('input', page)">
                    {{ page }}
                </a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === pages }">
                <a
                    class="page-link"
                    aria-label="Next"
                    @click.prevent="$emit('input', currentPage + 1)"
                >
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Pagination',
    model: {
        prop: 'currentPage'
    },
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        pages: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            range: 5
        }
    },
    computed: {
        start() {
            if (this.range >= this.pages) {
                return this.pages - this.range
            }
            let delta = Math.ceil(this.range / 2)
            if (this.currentPage - delta > this.pages - this.range) {
                return this.pages - this.range + 1
            }
            if (this.currentPage - delta < 0) {
                delta = this.currentPage
            }
            return this.currentPage - delta
        }
    }
}
</script>
