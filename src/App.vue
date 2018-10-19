<template>
    <div id="app">
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'post', params: {id: 24}}" class="nav-link">Post</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'user'}" class="nav-link">User</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'other'}" class="nav-link">Other</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="row mt-4">
            <div class="col-4">
                <h2>Sidebar</h2>
                <router-view name="sidebar"></router-view>
            </div>
            <div class="col-8">
                <h2>content</h2>
                <transition name="page-swap" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style lang="scss">
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

    .page-swap-enter-active,
    .page-swap-leave-active {
        opacity: 1;
        transition: transform .5s, opacity .5s;
    }
    .page-swap-enter {
        transform: translateX(100px);
        opacity: 0;
    }

    .page-swap-leave-active {
        transform: translateX(100px);
        opacity: 0;
    }
</style>
