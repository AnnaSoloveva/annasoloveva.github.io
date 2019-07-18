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
                        <button
                            type="button"
                            class="btn btn-primary"
                            :class="{ disabled: disabledFlag }"
                            :disabled="disabledFlag"
                            @click="addUser"
                        >
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
import { mapFields } from 'vee-validate'
var today = new Date()
export default {
    name: 'Add',
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
    computed: {
        ...mapFields({
            nameFlags: 'Name',
            emailFlags: 'Email',
            lastNameFlags: 'LastName'
        }),
        disabledFlag() {
            if (!this.nameFlags.dirty || !this.emailFlags.dirty || !this.lastNameFlags.dirty) {
                return true
            }
            return false
        }
    },
    methods: {
        addUser() {
            this.$validator.validateAll()
            if (this.errors.any()) {
                return
            }
            axios
                .post('http://localhost:3000/users/', this.user)
                .then(response => {
                    this.newId = response.data.id
                    this.$router.push('/edit/' + this.newId)
                })
                .catch(error => console.error(error))
        }
    }
}
</script>
