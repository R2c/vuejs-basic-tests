<template>
    <transition :name="transition">
        <div v-show="visible" class="carousel-slide">
            <img :src="url">
            <div class="summary">{{ content }}</div>
        </div>
    </transition>
</template>

<script>
    export default {
        data () {
            return {
                index: null,
            };
        },
        props: {
            url: String,
            content: String,
        },
        computed: {
            transition () {
                return 'slide-' + this.$parent.direction;
            },
            visible () {
                return this.index === this.$parent.currentIndex;
            }
        },
        mounted () {
            this.index = this.$parent.slides.push(this.url) - 1;
        },
    }
</script>
