<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="display-4">{{ titleForm }}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col card">
                <div class="card-body">
                    <div class="card-title"></div>
                    <form-user v-model="user"></form-user>
                    <div class="form-group">
                        <router-link class="btn btn-warning" to="/users">Отмена</router-link>
                        <button type="submit" class="btn btn-primary" @click="saveUser">
                            Сохранить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Edit',
    components: {
        'form-user': () => import('../components/FormUser.vue')
    },
    data() {
        return {
            user: {}
        }
    },
    computed: {
        userId() {
            return this.$route.params.id
        },
        titleForm() {
            if (this.user.firstName != undefined) {
                return this.user.firstName + ' ' + this.user.lastName
            } else {
                return 'Редактировать профиль'
            }
        },
        url() {
            return 'http://localhost:3000/users/' + this.userId
        }
    },
    mounted() {
        this.loadUser()
    },
    methods: {
        loadUser() {
            axios
                .get(this.url)
                .then(response => response.data)
                .then(user => {
                    this.user = user
                })
                .catch(error => console.error(error))
        },
        saveUser() {
            axios
                .patch(this.url, this.user)
                .then(() => this.$router.push('/users'))
                .catch(error => console.error(error))
        }
    }
}
</script>
