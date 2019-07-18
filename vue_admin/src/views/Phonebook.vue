<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="display-4">Список пользователей</h1>
            </div>
        </div>
        <div class="row">
            <users-list :users="users" @delete-user="deleteUser">
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
import axios from 'axios'
export default {
    name: 'Phonebook',
    components: {
        'users-list': () => import('@/components/UsersList.vue')
    },
    data: () => ({
        users: []
    }),
    created() {
        this.loadUsers()
    },
    methods: {
        loadUsers() {
            axios
                .get('http://localhost:3000/users/')
                .then(response => response.data)
                .then(users => {
                    this.users = users
                })
                .catch(error => console.error(error))
        },
        deleteUser(idUser) {
            axios
                .delete('http://localhost:3000/users/' + idUser, this.user)
                .then(() => this.loadUsers())
                .catch(error => console.error(error))
        }
    }
}
</script>
