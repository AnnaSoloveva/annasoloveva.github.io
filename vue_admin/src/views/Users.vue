<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="display-4">Список пользователей</h1>
            </div>
        </div>
        <div class="row">
            <div v-if="!users">
                <div class="spinner-border text-info" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <users-list v-else :users="users" @delete-user="deleteUser"></users-list>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Users',
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
    },
    methods: {
        deleteUser(idUser) {
            this.$store.dispatch('DELETE_USER', idUser)
        }
    }
}
</script>
