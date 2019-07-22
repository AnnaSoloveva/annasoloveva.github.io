<template>
    <div class="col card">
        <div class="card-body">
            <div class="card-title">{{ titleUsersTable }}</div>
            <div>
                <select-count v-model="count"></select-count>
                <table class="table table-striped users">
                    <thead>
                        <slot name="table-header">
                            <tr>
                                <th></th>
                                <th></th>
                                <th>ФИО</th>
                                <th>Email</th>
                                <th>Телефон</th>
                                <th>Возраст</th>
                                <th>Баланс</th>
                                <th>Компания</th>
                            </tr>
                        </slot>
                    </thead>
                    <tbody>
                        <tr v-for="user in filterUser" :key="user.id">
                            <slot name="table-body" :user="user">
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
                                <td>{{ user.age }}</td>
                                <td>{{ user.balance }}</td>
                                <td>{{ user.company }}</td>
                            </slot>
                        </tr>
                    </tbody>
                </table>
                <pagination-comp
                    v-if="pages > 1"
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
        'select-count': () => import('@/components/SelectCountList.vue'),
        'pagination-comp': () => import('@/components/Pagination.vue')
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
            currentPage: 1
        }
    },
    computed: {
        filterUser() {
            let start = (this.currentPage - 1) * this.count
            return this.users.slice(start, start + this.count)
        },
        titleUsersTable() {
            return this.users.length > 0
                ? 'Всего пользователей: ' + this.users.length
                : 'Список пользователей'
        },
        pages() {
            return Math.ceil(this.users.length / this.count)
        }
    },
    watch: {
        count() {
            this.currentPage = 1
        }
    },
    methods: {
        deleteUser(idUser) {
            this.$emit('delete-user', idUser)
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
