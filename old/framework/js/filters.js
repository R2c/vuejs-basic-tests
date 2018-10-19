Vue.filter('capitalize', function (value, suffix) {
    return value.toUpperCase() + suffix;
});

let reverse = function (value) {
    return value.split('').reverse().join('');
};

var vm = new Vue({
    el: '#app',
    filters: {
        reverse: reverse,
    },
    data: {
        message: 'Il était une fois ',
    },
});


