import Vue from 'vue';
import store from './LightboxStore';

Vue.directive('lightbox', {
    bind (el, binding) {
        if (binding.value === undefined) {
            return;
        }
        let url = binding.value;
        let group = Object.keys(binding.modifiers).length === 0 ? url : Object.keys(binding.modifiers)[0];

        store.addImage(url, group);
        el.addEventListener('click', (event) => {
            event.preventDefault();
            store.open(url, group);
        });
    },
    unbind (el, binding) {
        let group = Object.keys(binding.modifiers).length === 0 ? url : Object.keys(binding.modifiers)[0];
        store.removeImage(binding.value, group);
    }
})
