<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="display-4">Редактировать профиль</h1>
            </div>
        </div>
        <div class="row">
            <div class="col card">
                <div class="card-body">
                    <div class="card-title"></div>
                    <edit-user :user="user"></edit-user>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import EditUser from '../components/EditUser'
    export default {
        name: 'Edit',
        data: function(){
            return {
                userId : 0,
                user: {}
            }
        },
        created() {
            this.userId = this.$route.params.userId;
        },
        components: {
            'edit-user': EditUser
        },
        mounted() {
            this.loadUser()
        },
        methods: {
            loadUser: function() {
                var self = this,
                    xhr = new XMLHttpRequest()
                xhr.open('GET', 'http://localhost:3000/users/'+this.userId, true);
                xhr.send();
                xhr.onload = function() {
                    self.user = JSON.parse(xhr.response);
                }
                xhr.error = function() {
                    console.error('error load users list');
                }
            }
        }
    }
</script>
