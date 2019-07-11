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
    components: {
        'add-user': AddUser
    }
}
</script>

<style scoped></style>
