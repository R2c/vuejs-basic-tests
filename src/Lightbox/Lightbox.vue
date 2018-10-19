<template>
    <div class="lightbox" v-if="image" @click="close">
        <div class="lightbox-content">
            <transition :name="transition">
                <lightbox-image :image="image" :key="image"></lightbox-image>
            </transition>
        </div>
        <div class="lightbox-close"><i class="fa fa-times fa-3x"></i></div>
        <div class="lightbox-pagination">
            <i class="fa fa-chevron-left fa-2x prev" @click.stop.prevent="prev" v-show="state.images[state.group].length > 1"></i>
            <i class="fa fa-chevron-right fa-2x next" @click.stop.prevent="next" v-show="state.images[state.group].length > 1"></i>
        </div>
    </div>
</template>

<script>
    import './LightboxDirective';
    import store from './LightboxStore';
    import LightboxImage from './LightboxImage.vue'

    export default {
        name: 'lightbox',
        data () {
            return {
                state: store.state,
            }
        },
        components: { LightboxImage },
        methods: {
            close () { store.close() },
            prev () { store.prev() },
            next () { store.next() },
        },
        computed: {
            transition () {
                return 'lightbox-enter-' + this.state.direction;
            },
            image () {
                if (this.state.currentIndex !== null) {
                    return this.state.images[this.state.group][this.state.currentIndex]
                }
            },
        }
    }
</script>

<style src="./lightbox.scss" lang="scss"></style>
