<template>
    <div id="app">
        <h2>Liste des utilisateurs <span class="badge badge-primary"> {{ users.length }}</span></h2>
        <hr>
        <div class="loading" v-if="loading">
            <div class="loader">
                <i class="fa fa-spinner fa-spin fa-3x"></i>
            </div>
        </div>
        <transition-group :name="transitionName" :class="'row'" tag="div">
            <div class="col-6 d-inline-block" v-for="user in users" :key="user.id" >
                <div class="card m-3">
                    <div class="card-header bg-primary text-white">
                        <span v-if="!editStatus.state || editStatus.user != user" @dblclick.prevent.stop="edit(user)">{{ user.name }}</span>
                        <input v-if="editStatus.state && editStatus.user == user" type="text" v-model="user.name">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ user.email }}</h5>
                        <p class="card-text">{{ user.address.city }}</p>
                        <div>
                            <button class="btn btn-outline-success btn-sm" @click="save(user)">Modifier</button>
                            <button class="btn btn-outline-danger btn-sm" @click="destroy(user)">Supprimer</button>
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
    import UserResource from './Axios/UserResource.js';

    export default {
        data () {
            return {
                users: {},
                transition: null,
                loading: false,
                editStatus: {
                    state: false,
                    user: null,
                }
            };
        },
        computed: {
            transitionName () {
                return 'user-' + this.transition;
            },
        },
        methods: {
            edit (user) {
                this.editStatus.state = true;
                this.editStatus.user = user;
                console.log('plop');
            },
            destroy (user) {
                this.loading = true;
                this.$http.delete('/users/' + user.id)
                    .then((response) => {
                        this.transition = 'destroy';
                        this.users = this.users.filter((userData) => userData !== user);
                    })
                    .finally(() => {
                        this.loading = false;
                    })
            },
            save (user) {
                this.loading = true;
                this.$http.put('/users/' + user.id, {name: user.name})
                    .then((response) => {
                        this.transition = 'save';
                    })
                    .finally(() => {
                        this.loading = false;
                    })
            },
        },
        created () {
            this.$resource = new UserResource();
            console.log(this.$resource);

            this.$http.get('/users')
                .then((response) => {
                    this.users = response.data
                })
                .catch(() => {
                    console.log('ERROR LOADING USER')
                })
        },
    }
</script>

<style lang="scss">
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(#FFF, 0.7);
        z-index: 1;

        div.loader {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .user-destroy-leave-active {
        transition: all .5s;
    }
    .user-destroy-leave-to {
        transform: scale(0);
    }

</style>
