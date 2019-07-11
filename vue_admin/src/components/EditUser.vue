<template>
    <div>
        <form>
            <div class="form-group">
                <label for="login">Имя</label>
                <input type="text" class="form-control" id="login" v-model="user.firstName">
            </div>
            <div class="form-group">
                <label for="fio">Фамилия</label>
                <input type="text" class="form-control" id="fio" v-model="user.lastName">
            </div>
            <div class="form-group">
                <label for="email1">Email address</label>
                <input type="email" class="form-control" id="email1" v-model="user.email">
            </div>
            <div class="form-group">
                <label for="phone">Телефон</label>
                <input type="tel" class="form-control" id="phone" v-model="user.phone">
            </div>
            <router-link class="btn btn-warning" to="/users">Отмена</router-link>
            <button type="submit" class="btn btn-primary">Сохранить</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "EditUser",
        props: {
            user: {
                type: Object,
                required: true
            }
        }
    }
</script>
