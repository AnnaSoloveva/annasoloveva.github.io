var User = new Vue({
    el: '#userList',
    data: function(){
        return {
            users: [],
            showUserTableFlag: true
        }
    },
    created: function(){
        this.loadUsers();
    },
    methods: {
        loadUsers: function(){
            this.users =[
                {userId: 1, surname: 'Иванов', firstName: 'Иван', patronymic: 'Иванович', avatar: 'img/user1.jpg'},
                {userId: 2, surname: 'Смирнов', firstName: 'Дмитрий', patronymic: 'Васильевич', avatar: 'img/user2.jpg'},
                {userId: 3, surname: 'Константинопольский', firstName: 'Константин', patronymic: 'Константинович', avatar: ''},
                {userId: 4, surname: 'Коновалова', firstName: 'Мария', patronymic: 'Ивановна', avatar: 'img/user3.jpg' },
                {userId: 5, surname: 'Шпак', firstName: 'Семен', patronymic: 'Семенович', avatar: ''}
            ]
        },
        showHideTable: function(){
            this.showUserTableFlag = !this.showUserTableFlag;
        }
    },
    filters: {
        upperText: function (value) {
           return value.toUpperCase();
        }
    },
    computed: {
        titleUsersTable: function(){
            return 'Всего пользователей: ' + this.users.length;
        },
        btnText: function(){
            if (this.showUserTableFlag){
                return 'Скрыть пользователей';
            } else {
                return 'Показать пользователей';
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
                    tooltipText.className = 'bg-info';
                    tooltipText.innerText = 'Полностью скроет таблицу';
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
