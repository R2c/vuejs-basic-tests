var vm = new Vue({
    el: '#app',
    data: {
        priorities: {
            low: {i18n:'Low', class: 'bg-info'},
            medium: {i18n:'Medium', class: 'bg-warning'},
            high: {i18n:'High', class: 'bg-danger'},
        },
        count: 0,
        tasks: [
            {
                content: 'Finir cette todo list en VueJS',
                priority: 'high',
            }
        ],
        task: {
            content: null,
            priority: '',
        },
        emptyTask: {
            content: null,
            priority: '',
        }
    },
    mounted: function() {
        this.count = this.tasks.length;
    },
    methods: {
        onAdd: function() {
            if (this.task.content === null || this.task.priority === '') {
                return;
            }
            this.tasks.push(this.task);
            this.count = this.tasks.length;
            this.task = this.emptyTask;
        },

        onRemove: function(key) {
            this.tasks.splice(key, 1);
            this.count = this.tasks.length;
        }
    }
});


