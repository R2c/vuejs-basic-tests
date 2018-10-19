<template>
    <div id="app">
        <carousel :slides="slides"></carousel>
    </div>
</template>

<script>
    import Carousel from './Carousel/Carousel.vue';
    import CarouselSlide from './Carousel/CarouselSlide.vue';

    export default {
        components: { Carousel, CarouselSlide },
        data () {
            return {
                slides: [
                    {
                        url: 'https://picsum.photos/600/300/?random&v=',
                        content: 'content 1',
                    },
                    {
                        url: 'https://picsum.photos/600/300/?random&v=',
                        content: 'content 2',
                    },
                    {
                        url: 'https://picsum.photos/600/300/?random&v=',
                        content: 'content 3',
                    },
                    {
                        url: 'https://picsum.photos/600/300/?random&v=',
                        content: 'content 4',
                    },
                    {
                        url: 'https://picsum.photos/600/300/?random&v=',
                        content: 'content 5',
                    },
                ],
            }
        },
    }
</script>
