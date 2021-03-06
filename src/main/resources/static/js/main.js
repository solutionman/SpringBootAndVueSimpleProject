
// register the grid component
new Vue({
    el: '#app',
    data: {
        users: []
    },
    computed: {
        userTable() {
            // actually inserting the HTML in the template
            return this.createTable(this.users)
        }
    },
    methods: {
        getUsers() {
            // getting JSON data from API
            return new Promise((resolve, reject) => {
                const users = fetch('http://localhost:8080/list')
                    .then(response => response.json())
                    .then(json => {
                        resolve(json)
                    })
            })
        },
        userRowHtml(user) {
            // creating a single table row of user data
            if (user) {
                let html = ''
                Object.entries(user).forEach(e => {
                    html += `<td>${e[1]}</td>`
                })
                return html
            }
            return ''
        },
        userRows(users) {
            // creating the table rows for user data
            if (users && users.length) {
                let html = ''
                users.forEach(e => {
                    html += `<tr>${this.userRowHtml(e)}</tr>`
                })
                return html
            }
            return ''
        },
        createTable(users) {
            // creating the table to insert
            if (users && users.length) {
                const headers = Object.keys(this.users[0])
                let html = ''
                html += '<table class="blueTable"><thead><tr>'
                headers.forEach(e => {
                    html += `<th>${e}</th>`
                })
                html += '</tr></thead>'
                html += '<tbody>'
                html += this.userRows(users)
                html += '</tbody></table>'
                return html
            }
            return ''
        }
    },
    async mounted() {
        this.users = await this.getUsers()
    }
})

var hello = new Vue({
    el: '#hello',
    data: {
        message: 'Hello Vue!'
    }
})