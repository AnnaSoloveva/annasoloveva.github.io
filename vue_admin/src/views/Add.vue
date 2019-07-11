<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="display-4">Добавить пользователя</h1>
            </div>
        </div>
        <div class="row">
            <div class="col card">
                <div class="card-body">
                    <div class="card-title"></div>
                    <add-user></add-user>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddUser from '../components/AddUser'
export default {
    name: 'Add',
    data: function() {
        return {
            users: [],
            lastId: 0
        }
    },
    components: {
        'add-user': AddUser
    },
    created() {
        this.loadUsers()
    },
    methods: {
        loadUsers: function() {
            var self = this,
                xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:3000/users/', true);
            xhr.send();
            xhr.onload = function() {
                self.users = JSON.parse(xhr.response)
                self.lastId = self.users[self.users.length - 1].id
            }
            xhr.error = function() {
                console.error('error load users list')
            }
        },
        addUser: function () {

        }
    }
}
</script>

<style scoped></style>
