<template src="./ScrollText.pug" lang="pug"></template>

<script>
    export default {
        props: {
            texts: {
                type: Array,
                required: true
            },
            interval: {
                type: Number,
                default: 4000
            }
        },
        data() {
            return {
                arrayPosition: 0
            };
        },
        created() {
            setInterval(() => {
                this.changeText();
            }, this.interval);
        },
        methods: {
            changeText() {
                this.arrayPosition++;

                if (this.texts.length === this.arrayPosition) {
                    this.arrayPosition = 0;
                }

                return this.texts[this.arrayPosition];
            }
        }
    }
</script>

<style scoped>
  .scrollText-container {
    margin-top: 50px;
    position: relative;
    height: 50px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .scrollText span {
    font-size: 2rem;
  }

  .scrollText {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 600;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
