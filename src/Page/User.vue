<template>
    <div id="app">
        <h2>Liste des utilisateurs <span class="badge badge-primary"> {{ users.length }}</span></h2>
        <div class="alert alert-danger" v-if="deletedCount > 0">
            Il y a {{ deletedCount }} user supprimé.
        </div>
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
                        <div class="position-relative">
                            <span v-if="!editStatus.state || editStatus.user != user" @dblclick.prevent.stop="edit(user, $event)">{{ user.name }}</span>
                            <input v-if="editStatus.state && editStatus.user == user"
                                   type="text"
                                   v-model.trim="$v.editStatus.user.name.$model"
                                   @keyup.enter="save(user)"
                                   class="form-control"
                                   :class="{'is-invalid': $v.editStatus.user.name.$error}"
                            >
                            <div class="invalid-tooltip">
                                <div v-if="user == $v.editStatus.user.$model && $v.editStatus.user.name.$model != null && !$v.editStatus.user.name.required">
                                    Field is required
                                </div>
                                <div v-if="user == $v.editStatus.user.$model && $v.editStatus.user.name.$model != null && !$v.editStatus.user.name.minLength">
                                    Field should have X min letters
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ user.email }}</h5>
                        <p class="card-text">{{ user.address.city }}</p>
                        <div>
                            <button class="btn btn-outline-danger btn-sm" @click="destroy(user)">Supprimer</button>
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
    import { required, minLength } from 'vuelidate/lib/validators'
    import userStore from './UserStore'
    import Vuex from 'vuex'

    global.vuex = Vuex;

    export default {
        store: userStore,
        data () {
            return {
                users: {
                },
                transition: null,
                loading: false,
                editStatus: {
                    state: false,
                    user: null,
                }
            };
        },
        validations: {
            editStatus: {
                user: {
                    name: {
                        required,
                        minLength: minLength(4)
                    },
                },
            },
        },
        computed: {
            transitionName () {
                return 'user-' + this.transition;
            },
            ...Vuex.mapGetters(['deletedCount'])
        },
        methods: {
            ...Vuex.mapActions(['delete']),
            edit (user, event) {
                if (this.editStatus.state) {
                    console.log(this.editStatus.user)
                    this.save(this.editStatus.user, (user) => {
                        console.log(user)
                        this.editStatus.user = user;
                    });
                } else {
                    this.editStatus.state = true;
                    this.editStatus.user = user;
                }
            },
            destroy (user) {
                this.loading = true;
                this.$http.delete('/users/' + user.id)
                    .then((response) => {
                        this.transition = 'destroy';
                        this.users = this.users.filter((userData) => userData !== user);
                        this.delete();
                    })
                    .finally(() => {
                        this.loading = false;
                    })
            },
            save (user, callback = () => {}) {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    this.loading = true;
                    this.$http.put('/users/' + user.id, {name: user.name})
                        .then((response) => {
                            this.transition = 'save';
                            callback(user);
                        })
                        .finally(() => {
                            this.editStatus.state = false;
                            this.loading = false;
                            this.editStatus.user = null;
                        })
                }
            },
        },
        created () {
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
