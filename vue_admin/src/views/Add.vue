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
                    <form-user v-model="user"></form-user>
                    <div class="form-group">
                        <router-link class="btn btn-warning" to="/users">Отмена</router-link>
                        <button type="button" class="btn btn-primary" @click="addUser">
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
var today = new Date()
export default {
    name: 'AddUser',
    components: {
        'form-user': () => import('@/components/FormUser.vue')
    },
    data() {
        return {
            user: {
                id: 0,
                isActive: true,
                balance: 0,
                picture: '',
                age: '',
                accessLevel: 'user',
                firstName: '',
                lastName: '',
                company: '',
                email: '',
                phone: '',
                address: '',
                about: '',
                registered:
                    today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear()
            },
            newId: null
        }
    },
    methods: {
        addUser() {
            this.$validator.validate().then(valid => {
                if (!valid) {
                    return
                }
                axios
                    .post('http://localhost:3000/users/', this.user)
                    .then(response => {
                        this.$router.push('/edit/' + response.data.id)
                    })
                    .catch(error => console.error(error))
            })
        }
    }
}
</script>
