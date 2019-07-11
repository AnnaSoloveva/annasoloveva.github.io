<template>
    <div id="app">
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    <img
                        src="@/assets/logo.png"
                        width="30"
                        height="30"
                        class="d-inline-block align-top"
                        alt=""
                    />
                </router-link>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/users" class="nav-link">Список пользователей</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/add" class="nav-link">Добавить пользователя</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="content-wrapper">
            <router-view />
        </div>
    </div>
</template>
