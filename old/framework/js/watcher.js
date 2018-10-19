var vm = new Vue({
    el: '#app',
    data: {
        success: false,
        message: '',
        firstName: 'Jean',
        lastName: 'Delatour',
        fullName: '',
    },
    computed: {
        cls: function () {
            console.log('CLS called');
            return (this.success) ? 'alert-success' : 'alert-danger';
        },
        // fullName: {
        //     get: function() {
        //         return this.firstName + ' ' + this.lastName;
        //     },
        //     set: function(value) {
        //         let parts = value.split(' ');
        //         this.firstName = parts[0];
        //         this.lastName = parts[1];
        //     }
        // }
    },
    watch: {
        fullName: function (value) {
            console.log(value);
        },
    }
});


