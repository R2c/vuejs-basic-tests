<template>
    <div class="carousel">
        <div class="carousel-slider">
            <slot></slot>
        </div>
        <div class="carousel-nav">
            <i class="fa fa-chevron-left prev" @click.prevent="prev()"></i>
            <i class="fa fa-chevron-right next" @click.prevent="next()"></i>
        </div>
        <div class="carousel-pagination">
            <span v-for="(slide, key) in slides" @click="goTo(key)" :class="{'active': key == currentIndex}"></span>
        </div>
    </div>
</template>

<script>
    import CarouselSlide from './CarouselSlide.vue';
    export default {
        components: { CarouselSlide },
        data () {
            return {
                currentIndex: 0,
                direction: 'right',
                slides: [],
            }
        },
        computed: {
            nbSlide () {
                return this.slides.length;
            }
        },
        methods: {
            goTo (target) {
                this.direction = (this.currentIndex > target) ? 'left' : 'right';
                this.currentIndex = target;
            },
            prev () {
                this.direction = 'left';
                this.currentIndex--;
                if (this.currentIndex < 0) {
                    this.currentIndex = this.nbSlide - 1;
                }
            },
            next () {
                this.direction = 'right';
                this.currentIndex++;
                if (this.currentIndex > this.nbSlide - 1) {
                    this.currentIndex = 0;
                }
            },
        },
    }
</script>

<style lang="scss">
    .carousel {
        position: relative;
        text-align: center;
        overflow: hidden;

        .carousel-slide .summary {
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0);
            z-index: 1;
            top: 15px;
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            border: 1px solid black;
            padding: 5px 10px;
        }

        .carousel-nav i {
            position: absolute;
            top: 50%;
            width: 30px;
            height: 30px;
            line-height: 26px;
            text-align: center;
            background-color: rgba(255, 255, 255, 0.5);
            display: inline-block;
            cursor: pointer;
            z-index: 1;
            color: gray;
            border-radius: 50%;
            &.prev {
                left: 10px;
                border: 2px solid gray;
            }
            &.next {
                right: 10px;
                border: 2px solid gray;
            }
        }

        .carousel-pagination {
            position: absolute;
            bottom: 10px;
            left: 0;
            right: 0;
            span {
                cursor: pointer;
                width: 10px;
                height: 10px;
                display: inline-block;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.5);
                margin: 0 5px;

                &.active {
                    background-color: rgba(0, 0, 0, 0.5);
                }
            }
        }
    }

    .slide-right-enter-active {
        animation: slideInRight 0.5s;
    }

    .slide-right-leave-active {
        animation: slideOutRight 0.5s;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
    .slide-left-enter-active {
        animation: slideInLeft 0.5s;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }

    .slide-left-leave-active {
        animation: slideOutLeft 0.5s;
    }

    @keyframes slideInRight {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }

    @keyframes slideOutRight {
        from { transform: translateX(0);}
        to { transform: translateX(-100%); }
    }

    @keyframes slideInLeft {
        from {transform: translateX(-100%); }
        to { transform: translateX(0); }
    }

    @keyframes slideOutLeft {
        from { transform: translateX(0); }
        to { transform: translateX(100%); }
    }

</style>
