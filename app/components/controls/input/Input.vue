<template src="./Input.pug" lang="pug"></template>

<script>
    export default {
        props: ["value", "id", "label", "errors", "validationmodel", "type", "min", "max"],
        data(){
            return {
                internValue: this.value
            };
        },
        methods: {
            onInput(){
                this.$emit('input',this.internValue);
            }
        }
    }
</script>

<style>
  .form-error div {
    font-size: 1rem;
    color: var(--disable-color);
    padding-top: 5px;
  }
</style>

<style scoped>
  .form-group input {
    color: black;
    height: 40px;
    padding: 10px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }
</style>

