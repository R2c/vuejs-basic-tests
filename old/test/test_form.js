var vm = new Vue({
    el: '#app',
    data: {
        user: null,
    },
    computed: {
        fullname: {
            get: function () {
                return this.user.firstname + ' ' + this.user.lastname;
            }
        }
    },
    beforeMount: function() {
        this.user = JSON.parse(this.$el.attributes['data-user'].value)
    }
});


