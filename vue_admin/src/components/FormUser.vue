<template>
    <div>
        <div>
            <div class="form-group">
                <div class="media">
                    <img
                        :src="localUser.picture"
                        class="align-self-start mr-3 img-thumbnail"
                        alt=""
                    />
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
                                <label>Дата регистрации пользователя</label>
                                <div class="input-group mb-3">
                                    <input
                                        v-model="localUser.registered"
                                        v-validate="'date_format:dd.MM.yyyy|required'"
                                        :class="{ 'is-invalid': errors.has('dateRegistered') }"
                                        type="text"
                                        class="form-control"
                                        name="dateRegistered"
                                        aria-describedby="button-addon2"
                                    />
                                    <datepicker v-model="localUser.registered" />
                                </div>
                                <div v-show="errors.has('dateRegistered')" class="text-danger">
                                    {{ errors.first('dateRegistered') }}
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="custom-control custom-switch">
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
                    <input
                        id="login"
                        v-model="localUser.firstName"
                        v-validate="'required'"
                        :class="{ 'is-invalid': errors.has('Name') }"
                        name="Name"
                        type="text"
                        class="form-control"
                    />
                    <div v-show="errors.has('Name')" class="text-danger">
                        {{ errors.first('Name') }}
                    </div>
                </div>
                <div class="col">
                    <label for="fio">Фамилия</label>
                    <input
                        id="fio"
                        v-model="localUser.lastName"
                        v-validate="'required'"
                        :class="{ 'is-invalid': errors.has('LastName') }"
                        name="LastName"
                        type="text"
                        class="form-control"
                    />
                    <div v-show="errors.has('LastName')" class="text-danger">
                        {{ errors.first('LastName') }}
                    </div>
                </div>
            </div>
            <div class="row form-group">
                <div class="col">
                    <label for="email1">Email address</label>
                    <input
                        id="email1"
                        v-model="localUser.email"
                        v-validate="'email|required'"
                        :class="{ 'is-invalid': errors.has('Email') }"
                        name="Email"
                        type="email"
                        class="form-control"
                    />
                    <div v-show="errors.has('Email')" class="text-danger">
                        {{ errors.first('Email') }}
                    </div>
                </div>
                <div class="col">
                    <label for="phone">Телефон</label>
                    <input id="phone" v-model="localUser.phone" type="tel" class="form-control" />
                </div>
            </div>
            <div class="row form-group">
                <div class="col">
                    <label for="balance">Баланс</label>
                    <input
                        id="balance"
                        v-model="localUser.balance"
                        type="text"
                        class="form-control"
                    />
                </div>
                <div class="col">
                    <label for="age">Возраст</label>
                    <input id="age" v-model="localUser.age" type="text" class="form-control" />
                </div>
            </div>
            <div class="row form-group">
                <div class="col">
                    <label>Права пользователя</label>
                    <label>
                        <select v-model="localUser.accessLevel" class="form-control">
                            <option v-for="item in accessList" :key="item">
                                {{ item }}
                            </option>
                        </select>
                    </label>
                </div>
                <div class="col">
                    <label for="company">Компания</label>
                    <input
                        id="company"
                        v-model="localUser.company"
                        type="text"
                        class="form-control"
                    />
                </div>
            </div>
            <div class="form-group">
                <label for="address">Адрес</label>
                <input id="address" v-model="localUser.address" type="text" class="form-control" />
            </div>
            <div class="form-group">
                <label>О пользователе</label>
                <wysiwig v-model="localUser.about" />
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    name: 'EditUser',
    inject: ['$validator'],
    components: {
        datepicker: () => import('@/components/Datepicker.vue'),
        wysiwig: () => import('@/components/Wysiwig.vue')
    },
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
            localUser: Object.assign({}, this.user),
            accessList: ['guest', 'user', 'admin']
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
