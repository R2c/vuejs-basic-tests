<template>
    <div @click.stop>
        <div v-if="loading" class="lightbox-loading"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>
        <transition name="lightbox-fade">
            <img :src="src" class="lightbox-image" :key="src">
        </transition>
    </div>
</template>

<script>
    export default {
        props: {
            image: String,
        },
        data () {
            return {
                loading: true,
                src: null,
            }
        },
        mounted () {
            let image = new window.Image();
            image.src = this.image;
            image.onload = () => {
                this.loading = false;
                this.src = image.src;
            }

            this.resize = () => { console.log('RESIZE') };

            window.addEventListener('resize', this.resize);
        },
        destroyed () {
            window.removeEventListener('resize', this.resize);
        }
    }
</script>
