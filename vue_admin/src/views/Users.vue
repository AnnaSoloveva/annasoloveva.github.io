<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="display-4">Список пользователей</h1>
            </div>
        </div>
        <div class="row">
            <div v-if="!users.length" class="col card">
                <div class="card-body">
                    <div class="spinner-border text-info" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
            <users-list v-else :users="users"></users-list>
        </div>
    </div>
</template>

<script>
import UsersList from '../components/UsersList'
export default {
    name: 'Users',
    components: {
        'users-list': UsersList
    },
    data: () => ({
        users: []
    }),
    mounted() {
        this.loadUsers()
    },
    methods: {
        loadUsers: function() {
            var self = this,
                xhr = new XMLHttpRequest()
            xhr.open('GET', 'http://localhost:3000/users/', true)
            xhr.send()
            xhr.onload = function() {
                self.users = JSON.parse(xhr.response)
            }
            xhr.error = function() {
                console.error('error load users list')
            }
        }
    }
}
</script>

<style scoped></style>
