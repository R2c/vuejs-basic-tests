var vm = new Vue({
    el: '#app',
    data: {
        seconds: 0,
        message: '',
    },
    mounted: function() {
        this.$interval = setInterval(() => {
            this.seconds++
        }, 1000);
    },
    destroyed: function () {
        clearInterval(this.$interval);
    },
});


