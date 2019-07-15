<template>
    <div>
        <div class="form-group">
            <div class="media">
                <img :src="localUser.picture" class="align-self-start mr-3 img-thumbnail" alt="" />
                <div class="media-body">
                    <div class="row form-group">
                        <div class="col">
                            <label for="id">Id пользователя</label>
                            <input
                                id="id"
                                v-model="localUser.id"
                                type="text"
                                class="form-control"
                                readonly
                                disabled
                            />
                        </div>
                        <div class="col">
                            <label for="dateRegistration">Дата регистрации пользователя</label>
                            <input
                                id="dateRegistration"
                                v-model="localUser.registered"
                                class="form-control"
                                readonly
                                disabled
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="custom-control custom-checkbox my-1 mr-sm-2">
                            <input
                                id="active"
                                v-model="localUser.isActive"
                                type="checkbox"
                                class="custom-control-input"
                            />
                            <label class="custom-control-label" for="active">
                                Активный пользователь
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row form-group">
            <div class="col">
                <label for="login">Имя</label>
                <input id="login" v-model="localUser.firstName" type="text" class="form-control" />
            </div>
            <div class="col">
                <label for="fio">Фамилия</label>
                <input id="fio" v-model="localUser.lastName" type="text" class="form-control" />
            </div>
        </div>
        <div class="row form-group">
            <div class="col">
                <label for="email1">Email address</label>
                <input id="email1" v-model="localUser.email" type="email" class="form-control" />
            </div>
            <div class="col">
                <label for="phone">Телефон</label>
                <input id="phone" v-model="localUser.phone" type="tel" class="form-control" />
            </div>
        </div>
        <div class="row form-group">
            <div class="col">
                <label for="balance">Баланс</label>
                <input id="balance" v-model="localUser.balance" type="text" class="form-control" />
            </div>
            <div class="col">
                <label for="age">Возраст</label>
                <input id="age" v-model="localUser.age" type="text" class="form-control" />
            </div>
        </div>
        <div class="row form-group">
            <div class="col">
                <label for="accessLevel">Права пользователя</label>
                <input
                    id="accessLevel"
                    v-model="localUser.accessLevel"
                    type="text"
                    class="form-control"
                />
            </div>
            <div class="col">
                <label for="company">Компания</label>
                <input id="company" v-model="localUser.company" type="text" class="form-control" />
            </div>
        </div>
        <div class="form-group">
            <label for="address">Адрес</label>
            <input id="address" v-model="localUser.address" type="text" class="form-control" />
        </div>
        <div class="form-group">
            <label for="about">О пользователе</label>
            <textarea
                id="about"
                v-model="localUser.about"
                type="text"
                class="form-control"
                rows="6"
            >
            </textarea>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    name: 'EditUser',
    model: {
        prop: 'user'
    },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            localUser: Object.assign({}, this.user)
        }
    },
    watch: {
        user: {
            deep: true,
            handler() {
                if (_.isEqual(this.user, this.localUser)) {
                    return
                }
                this.localUser = Object.assign({}, this.user)
            }
        },
        localUser: {
            deep: true,
            handler() {
                this.$emit('input', Object.assign({}, this.localUser))
            }
        }
    },
    mounted() {
        this.localUser = Object.assign({}, this.user)
    }
}
</script>
<style scoped lang="less">
.form-group {
    .media img {
        min-width: 100px;
        min-height: 100px;
    }
}
</style>
