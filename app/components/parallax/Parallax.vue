<template src="./Parallax.pug" lang="pug"></template>

<script>
    import Parallax from "vue-parallaxy";

    export default {
        props: ['containerHeight'],
        components: {
            customPara: Parallax
        },
        data() {
            return {
                yPosition: 0
            };
        },
        methods: {
            handleScroll() {
                const divTop = this.getTopPos();
                if (divTop < 400) {
                    if (document) {
                        document.getElementsByClassName('parallax-img')[0].setAttribute("style", `transform: translate3d(0px, ${divTop*-0.5}px, 0px);`)
                    }
                }
            },
            getTopPos() {
                return this.$refs.parallaxContainer.getBoundingClientRect().top;
            },
            getStyle() {
                return {
                    height: this.containerHeight + 'px'
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped>
  .parallax-container {
    position: relative;
    overflow: hidden;
  }

  .parallax-title {
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    padding: 20px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    text-align: center;
  }

  .parallax-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    text-align: center;
    flex-direction: column;
  }

  .parallax-container img {
    transform: scale(3);
  }
</style>
