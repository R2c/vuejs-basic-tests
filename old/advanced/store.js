class NotificationStore {
    constructor () {
        this.state = {
            count: 0
        }
    };
    increment () {
        this.state.count++;
    }

    decrement () {
        this.state.count--;
    }
}

let notification_store = new NotificationStore();

let Counter = {
    data: function() {
        return {
            state: notification_store.state,
        };
    },
    methods: {
        increment () {
            notification_store.increment();
        }
    },
    computed: {
        count () {
            return this.state.count;
        }
    },
    template: `<button @click="increment">{{ count }}</button>`,
};

let Notification = {
    components: { Counter },
    methods: {
        addNotification () {
            notification_store.increment();
        }
    },
    template: `<div>
            <counter></counter>
            <button @click="addNotification"><i class="btn btn-plus"></i></button>
        </div>`,
};

var vm = new Vue({
    el: '#app',
    components: {
        notification: Notification,
        counter: Counter,
    },
    data: {
        notification_count: 0,
    },
});


