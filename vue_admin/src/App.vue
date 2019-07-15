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
                    <router-link tag="li" class="nav-item" to="/users">
                        <a class="nav-link">Список пользователей</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/add">
                        <a class="nav-link">Добавить пользователя</a>
                    </router-link>
                </ul>
            </div>
        </nav>
        <div class="content-wrapper">
            <router-view />
        </div>
    </div>
</template>
