<template>
    <div class="col card">
        <div class="card-body">
            <div class="card-title">{{ titleUsersTable }}</div>
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
                    <tr v-for="user in users" :key="user.id">
                        <td>
                            <router-link :to="{ name: 'edit', params: { userId: user.id } }">
                                <font-awesome-icon icon="edit"/>
                            </router-link>
                        </td>
                        <td><img :src="user.picture" /></td>
                        <td>{{ user.firstName }} {{ user.lastName }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<!--@click="openEditUser(user.id)"-->
<script>
export default {
    name: 'UsersList',
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    computed: {
        titleUsersTable: function() {
            return 'Всего пользователей: ' + this.users.length
        }
    },
    methods: {
        openEditUser: function(idUser) {
            this.$emit('open-user', idUser)
        }
    }
}
</script>
<style lang="less">
.users {
    margin: 50px 0;
    img {
        width: 100px;
    }
}
</style>
