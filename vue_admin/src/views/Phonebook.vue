<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="display-4">Список пользователей</h1>
            </div>
        </div>
        <div v-if="users" class="row">
            <users-list :users="users">
                <template v-slot:table-header>
                    <th>#</th>
                    <th>ФИО</th>
                    <th>Телефон</th>
                </template>
                <template v-slot:table-body="{ user }">
                    <th>#{{ user.id }}</th>
                    <td>{{ user.firstName }} {{ user.lastName }}</td>
                    <td>{{ user.phone }}</td>
                </template>
            </users-list>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Phonebook',
    components: {
        'users-list': () => import('@/components/UsersList.vue')
    },
    computed: {
        users() {
            return this.$store.getters.USERS
        }
    },
    mounted() {
        this.$store.dispatch('GET_USERS')
    }
}
</script>
