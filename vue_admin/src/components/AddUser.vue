<template>
    <div>
        <form>
            <div class="form-group">
                <label for="login">Имя</label>
                <input type="text" class="form-control" id="login" />
            </div>
            <div class="form-group">
                <label for="fio">Фамилия</label>
                <input type="text" class="form-control" id="fio" />
            </div>
            <div class="form-group">
                <label for="email1">Email address</label>
                <input type="email" class="form-control" id="email1" />
            </div>
            <div class="form-group">
                <label for="phone">Телефон</label>
                <input type="tel" class="form-control" id="phone" />
            </div>
            <router-link class="btn btn-warning" to="/users">Отмена</router-link>
            <button type="submit" class="btn btn-primary">Добавить</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddUser"
    }
</script>
