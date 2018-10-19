<template>
    <div>
        <h1>Extra page !!!</h1>
        <p>{{ message }}</p>
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link :to="{name: 'home-sub-a'}" class="nav-link">Sub A</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'home-sub-b'}" class="nav-link">Sub B</router-link>
            </li>
        </ul>
        <transition name="bounce" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: 'salut',
            };
        },
        beforeRouteLeave (route, redirect, next) {
            let confirm = window.confirm('Voulez vous quitter sur cette page');
            if (confirm) {
                next();
            } else {
                next(false);
            }
        },
        beforeRouteEnter (route, redirect, next) {
            let confirm = window.confirm('Voulez vous aller sur cette page');
            if (confirm) {
                next(vm => {
                    vm.message = 'Super c\'est bon ';
                });
            } else {
                next('/');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
