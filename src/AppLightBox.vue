<template>
    <div id="app">
        <div>
            <a v-for="n in 5" v-lightbox="'https://picsum.photos/800/600/?image=1' + n">
                <img :src="'https://picsum.photos/200/150/?image=1' + n">
            </a>
            <a v-for="n in 5" v-lightbox.other="'https://picsum.photos/800/600/?image=5' + n">
                <img :src="'https://picsum.photos/200/150/?image=5' + n">
            </a>
            <hr>
        </div>
        <lightbox></lightbox>
    </div>
</template>

<script>
    import Lightbox from './Lightbox/Lightbox.vue';

    export default {
        components: { Lightbox }
    }
</script>
