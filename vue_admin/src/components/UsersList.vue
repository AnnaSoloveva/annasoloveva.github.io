<template>
    <div class="col card">
        <div class="card-body">
            <div class="card-title">{{ titleUsersTable }}</div>
            <div v-if="!users.length">
                <div class="spinner-border text-info" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <div v-else>
                <select-count v-model="count"></select-count>
                <table class="table table-striped users">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>ФИО</th>
                            <th>Email</th>
                            <th>Телефон</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in filterUser" :key="user.id">
                            <td>
                                <router-link :to="'/edit/' + user.id">
                                    <font-awesome-icon icon="edit" />
                                </router-link>
                                &nbsp;
                                <a @click.prevent="deleteUser(user.id)">
                                    <font-awesome-icon icon="trash-alt" />
                                </a>
                            </td>
                            <td><img :src="user.picture" /></td>
                            <td>{{ user.firstName }} {{ user.lastName }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.phone }}</td>
                        </tr>
                    </tbody>
                </table>
                <pagination-comp
                    v-if="flagPages"
                    v-model="currentPage"
                    :pages="pages"
                ></pagination-comp>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UsersList',
    components: {
        'select-count': () => import('../components/SelectCountList.vue'),
        'pagination-comp': () => import('../components/Pagination.vue')
    },
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            count: 5,
            flagPages: true,
            currentPage: 1,
            filterUser: this.users.slice(0, 0)
        }
    },
    computed: {
        titleUsersTable() {
            if (this.users.length > 0) {
                return 'Всего пользователей: ' + this.users.length
            } else {
                return 'Список пользователей'
            }
        },
        pages() {
            if (this.count > 0) {
                return Math.ceil(this.users.length / this.count)
            } else {
                return Math.ceil(this.users.length / 5)
            }
        }
    },
    watch: {
        count: {
            deep: true,
            handler() {
                this.checkPage()
                this.currentPage = 1
                if (this.count > 0) {
                    this.filterUser = this.users.slice(0, this.count)
                } else {
                    this.filterUser = this.users.slice(0, 5)
                }
            }
        },
        users: {
            deep: true,
            handler() {
                this.filterUser = this.users.slice(0, this.count)
            }
        },
        currentPage: {
            deep: true,
            handler() {
                var start = (this.currentPage - 1) * this.count
                this.GetRowTable(start)
            }
        }
    },
    methods: {
        deleteUser(idUser) {
            this.$emit('delete-user', idUser)
        },
        checkPage() {
            if (this.pages > 1) {
                this.flagPages = true
            } else {
                this.flagPages = false
            }
        },
        GetRowTable(start) {
            if (this.count > 0) {
                this.filterUser = this.users.slice(start, start + this.count)
            } else {
                this.filterUser = this.users.slice(0, 5)
            }
        }
    }
}
</script>
<style scoped lang="less">
.users {
    margin: 0 0 32px;
    img {
        width: 100px;
    }
}
</style>
