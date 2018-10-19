Vue.directive('salut', {
    bind: function (el, binding, vnode) {
        el.value = binding.value;
        console.log('bind');
    },

    update: function (el, binding, vnode, oldvnode) {
        console.log('update');
    },
});

let test = function(el, binding) {
    el.value = binding.value;
    this.console.log('PLOP');
};

var vm = new Vue({
    el: '#app',
    directives: {
        test: test,
    },
    data: {
        message: 'ZDAD',
    },
    methods: {
        demo: function (event) {
            console.log('salut');
        },
    },
});


