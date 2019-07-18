<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a
                    class="page-link"
                    aria-label="Previous"
                    @click.prevent="$emit('change', localCurrentPage - 1)"
                >
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li
                v-for="page in filterdItems"
                :key="page"
                class="page-item"
                :class="{ active: localCurrentPage === page }"
            >
                <a class="page-link" @click.prevent="$emit('input', page)">
                    {{ page }}
                </a>
            </li>
            <li class="page-item" :class="{ disabled: localCurrentPage === localPages }">
                <a
                    class="page-link"
                    aria-label="Next"
                    @click.prevent="$emit('change', localCurrentPage + 1)"
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
            localCurrentPage: this.currentPage,
            localPages: this.pages,
            range: 5,
            pagesArr: []
        }
    },
    computed: {
        filterdItems() {
            if (this.range >= this.pages) {
                return this.pagesArr
            }
            let start = 0
            let delta = Math.ceil(this.range / 2)
            if (this.currentPage - delta > this.pages - this.range) {
                start = this.pages - this.range + 1
            } else {
                if (this.currentPage - delta < 0) {
                    delta = this.currentPage
                }
                start = this.currentPage - delta
            }
            return this.pagesArr.slice(start, start + this.range)
        }
    },
    watch: {
        currentPage: {
            deep: true,
            handler() {
                this.localCurrentPage = this.currentPage
            }
        },
        pages: {
            deep: true,
            handler() {
                this.localPages = this.pages
                this.getPagesArr()
            }
        }
    },
    created() {
        this.getPagesArr()
    },
    methods: {
        getPagesArr() {
            this.pagesArr = []
            for (var i = 0; i < this.localPages; i++) {
                this.pagesArr.push(i + 1)
            }
        }
    }
}
</script>
