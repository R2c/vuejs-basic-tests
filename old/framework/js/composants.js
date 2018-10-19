Vue.component('message', {
    props:  {
        'type': {type: String, default: 'success'},
        'header': String,
        'message': String,
    },
    methods: {
        close () {
            this.$emit('close');
        },
    },
    template: `
        <div class="alert" :class="'alert-' + type">
            <i class="fa fa-times" @click.prevent="close"></i>
            <h5 class="header">{{ header }}</h5>
            {{ message }}
        </div>`
});

let formUser = {
    props: {
        value: Object,
    },
    data () {
        return {
            user: JSON.parse(JSON.stringify(this.value))
        }
    },
    methods: {
        save () {
            this.$emit('input', this.user);
        }
    },
    mounted () {
        console.log(this.$slots.header)
    },
    template: `
        <form @submit.prevent="save">
            <p><slot name="header"></slot></p>
            <label for="">Prénom</label>
            <input type="text" v-model="user.firstName">
            <label for="">Nom</label>
            <input type="text" v-model="user.lastName">
            <button type="submit" class="btn btn-primary">Add</button>
            <p><slot name="footer"></slot></p>
        </form>
    `,
};

let counter = {
    data: function () {
        return {
            count: 0
        };
    },
    props: {
        'start': {type: Number, default: 0}
    },
    computed: {
        total: function() {
            return this.start + this.count;
        }
    },
    methods: {
        increment: function () {
            this.count++;
        },
    },
    // mounted: function() {
    //     this.count = this.start;
    // },
    template: `<div>
        <button @click="increment">{{ total }}</button>
    </div>`,
}

var vm = new Vue({
    el: '#app',
    data: {
        message: 'Un super texte',
        alert: false,
        user: {
            firstName: 'Jean',
            lastName: 'Delatour',
        }
    },
    methods: {
        showAlert () {
            this.alert = true;
        },
        hideAlert () {
            this.alert = false;
        },
    },
    components:  {
        'badge': {
            props:  {
                'type': {type: String, default: 'success'},
                'content': String,
            },
            template: `<div class="badge" :class="'badge-' + type">{{ content }}</div>`
        },
        'counter': counter,
        'formUser': formUser,
    },
});


