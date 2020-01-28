<template src="./Jumbotron.pug" lang="pug"></template>

<script>
    import PrimaryButton from "../controls/button/PrimaryButton.vue";
    import ScrollText from "@/components/scrolltext/ScrollText.vue";
    import ArrowDownAnimation from "@/components/animations/arrowdown/ArrowDown.vue";
    import ScrollToDown from "@/components/utils/behaviordriven.js";

    export default {
        props: {
            showVideo: {
                type: Boolean,
                default: false
            },
            showVideoOverlay: {
                type: Boolean,
                default: true
            },
            showImage: {
                type: Boolean,
                default: false
            },
            bgImage: {
                type: String
            },
            bgColor: {
                type: String
            },
            heightClass: {
                type: String
            },
            overLayColor: {
                type: String
            },
            showArrow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                title: "Dein persönlicher Finanzkompass"
            };
        },
        methods: {
            scrollDown() {
                const element = document.getElementById("page-two");
                if (element) {
                    ScrollToDown.scrollToDown(element.getBoundingClientRect().y);
                }
            }
        },
        components: {
            pbtn: PrimaryButton,
            ScrollText,
            ArrowDown: ArrowDownAnimation
        }
    }
</script>

<style scoped>
  .jumbotron-custom {
    height: auto;
    position: relative;
  }

  .action-container {
    display: flex;
    justify-content: center;
  }

  .action-container a {
    margin-top: 5px;
  }

  .description {
    margin-top: 50px;
  }

  .jumbotron-h1 {
    font-size: 2.5rem;
  }

  .jumbotron-container {
    width: 90%;
    margin: 30px auto;
    z-index: 5;
    text-align: center;
  }

  .jumbotron-container .description {
    font-size: 1.2rem;
  }

  .jumbotron-image {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
    display: flex;
  }

  .jumbotron-custom {
    height: 100vh;
    min-height: 937px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .jumbotron {
    height: 200px;
  }

  .video-container {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    display: flex;
  }

  .video-color-overlay, .image-color-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(102, 102, 102, 0.8);
  }

  .jumbotron-container h1 {
    font-size: 1.8rem;
  }

  @media all and (min-width: 736px) {
    .jumbotron-h1 {
      font-size: 4rem;
    }

    .jumbotron-container {
      width: 80%;
      margin: 30px auto;
      z-index: 5;
    }

    .action-container {
      justify-content: space-around;
    }

    .jumbotron-container h1 {
      font-size: 2.8rem;
    }
  }
</style>
