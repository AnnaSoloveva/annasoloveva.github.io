/*--главное меню--*/
var mainMenuComponent = {
    template: '#mainMenu',
    props: {
        tab:{
            type: String,
            required: true
        }
    },
    computed: {
        usersListTabActive : function(){
            if (this.tab == 'users-list'){ return true}
        },
        userAddTabActive:  function(){
            if (this.tab == 'add-user'){ return true}
        }
    },
    methods: {
        selectTab: function(tabName){
            this.$emit('select-tab', tabName);
        }
    }
}
/*--список пользователей--*/
var usersListComponent = {
    template: '#usersList',
    props: {
        datauser:{
            type: Array,
            required: true
        }
    },
    computed: {
        titleUsersTable: function(){
            return 'Всего пользователей: ' + this.datauser.length;
        }
    },
    methods: {
        openEditUser: function(idUser){
            this.$emit('open-user', idUser);
        }
    }
}
/*--редактирование пользователй--*/
var editUserComponent = {
    template: '#formEditUser',
    data: function(){
        return{
            username: this.datauser.username,
            name: this.datauser.name,
            email: this.datauser.email,
            phone: this.datauser.phone
        }
    },
    props:{
        datauser:{
            type: Object,
            required: true
        }
    },
    computed: {
        titleFormEditUsers: function(){
            return 'Редактировать профиль'
        }
    }
}
/*--главная страница--*/
var mainPageComponent = {
    template: '#mainPage',
    props: {
        datauser:{
            type: Array,
            required: false
        }
    },
    methods: {
        openEditUser: function(idUser){
            this.$emit('open-user', idUser);
        }
    }
}
/*--добавить пользователя --*/
var addUserComponent = {
    template: '#formAddUser',
    data: function(){
        return{
            username: '',
            name: '',
            email: '',
            phone: ''
        }
    },
    props: {}
}
/*--------------------------------------------------*/
var admin = new Vue({
    el: '#admin',
    data: function(){
        return {
            users: [],
            showUserTableFlag: true,
            tabUsersListFlag: false,
            userAddTabActive: false,
            currentTabContent: 'main-page',
            editIdUser: ''
        }
    },
    created: function(){
        this.loadUsers();
    },
    components: {
        'main-menu': mainMenuComponent,
        'users-list': usersListComponent,
        'edit-user': editUserComponent,
        'main-page': mainPageComponent,
        'add-user': addUserComponent
    },
    methods: {
        loadUsers: function(){
            var self = this,
                xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
            xhr.send();
            xhr.onload = function() {
                console.log('данные загружены')
                self.users = JSON.parse(xhr.response);
            }
            xhr.error = function(){console.log('error load users list')}
        },
        selectTab: function(tabName){
            switch (tabName){
                case 'addUserTab':
                    this.currentTabContent = 'add-user';
                    this.editIdUser = '';
                    break;
                case 'usersListTab':
                    this.currentTabContent = 'users-list';
                    this.editIdUser = '';
                    break;
                case 'mainPage':
                    this.currentTabContent = 'main-page';
                    this.editIdUser = '';
                    break;
            }
        },
        openUserInfo: function(idUser){
            this.currentTabContent = 'edit-user';
            this.editIdUser = idUser;
        },
        showHideTable: function(flag){
            flag = !flag;
            return flag;
        }
    },
    computed: {
        userInfo: function(){
            switch (this.currentTabContent){
                case 'edit-user':
                    for(var i=0; i<this.users.length; i++){
                        if (this.users[i].id == this.editIdUser){
                            return this.users[i]
                        }
                    }
                    return '';
                case 'add-user':
                    return [];
                default:
                    return this.users
            }
        }

    },
    directives: {
        copy: {
            bind: function (el) {
                el.addEventListener('click', function(){
                    var fio = el.parentNode.parentNode.cells[1].innerText + ' ' + el.parentNode.parentNode.cells[2].innerText + ' ' + el.parentNode.parentNode.cells[3].innerText + ' ';
                    console.log(fio);
                    document.getElementById('copyInput').value = fio;

                });
            }
        },
        tooltip: {
            bind: function (el){
                el.onmouseover = function(){
                    var tooltipText = document.createElement('div');
                    tooltipText.className = 'popover fade show bs-popover-bottom';
                    tooltipText.style.top = '100%';
                    tooltipText.style.left = '30%';
                    tooltipText.innerHTML = '<div class="arrow" style="left: 124px;"></div><h3 class="popover-header"></h3><div class="popover-body">Полностью скроет таблицу</div></div>';
                    el.parentNode.appendChild(tooltipText);
                }
                el.onmouseout = function(){
                    var tooltipText = el.nextElementSibling;
                    tooltipText.parentNode.removeChild(tooltipText)
                }
            }
        }
    }
})
