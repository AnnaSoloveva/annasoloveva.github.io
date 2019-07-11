<template>
    <div>
        <form @submit="addUser()">
            <div class="form-group">
                <label for="login">Имя</label>
                <input type="text" class="form-control" :class="{'is-invalid' : errors.name}" id="login" v-model="firstName"/>
                <div v-if="errors.name" class="invalid-feedback"> {{ errors.name }}</div>
            </div>
            <div class="form-group">
                <label for="fio">Фамилия</label>
                <input type="text" class="form-control" id="fio" :class="{'is-invalid' : errors.lastname}" v-model="lastName"/>
                <div v-if="errors.name" class="invalid-feedback"> {{ errors.lastname }}</div>
            </div>
            <div class="form-group">
                <label for="email1">Email address</label>
                <input type="email" class="form-control" id="email1" v-model="email" :class="{'is-invalid' : errors.email}"/>
                <div v-if="errors.email" class="invalid-feedback"> {{ errors.email }}</div>
            </div>
            <div class="form-group">
                <label for="phone">Телефон</label>
                <input type="tel" class="form-control" id="phone" v-model="phone" :class="{'is-invalid' : errors.phone}"/>
                <div v-if="errors.email" class="invalid-feedback"> {{ errors.email }}</div>
            </div>
            <router-link class="btn btn-warning" to="/users">Отмена</router-link>
            <button type="submit" class="btn btn-primary">Добавить</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddUser",
        data: function(){
            return {
                newUser: {},
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                errors: {
                    name: '',
                    lastname: '',
                    email: '',
                    phone: ''
                }
            }
        },
        methods: {
            addUser: function(){
                this.errors = {};
                var flagError = false;
                if (this.firstName === '') {
                    this.errors.name = 'Требуется указать имя.';
                    flagError = true;
                }
                if (this.lastName === '') {
                    this.errors.lastname = 'Требуется указать фамилию.';
                    flagError = true;
                }
                if (this.email === '') {
                    this.errors.email = 'Требуется указать email.';
                    flagError = true;
                }
                if (this.phone === '') {
                    this.errors.phone = 'Требуется указать номер телефона.';
                    flagError = true;
                }
                if (flagError === true) {return true}
                this.$emit('addUser', this.newUser);
            }
        }
    }
</script>
