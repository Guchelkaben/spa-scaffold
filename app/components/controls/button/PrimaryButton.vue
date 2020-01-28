<template src="./PrimaryButton.pug" lang="pug"></template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: "Button"
      },
      to: {
        type: String
      },
      clazz: {
        type: String,
        default: "primary"
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick() {
        this.$emit("onClick");
      }
    }
  }
</script>

<style>

  .btn-primary, .btn-transparent {
    padding: 10px 40px;
    text-align: center;
    display: flex;
    max-width: 500px;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
  }

  .btn-primary {
    background-color: var(--primary-color);
    font-weight: 500;
    border: var(--primary-color) 4px solid;
    transition: border .2s ease-out, color .2s ease-out, background-color .2s ease-out;
    opacity: 1;
  }

  .btn-primary:hover {
    background-color: var(--primary-color-disabled);
    border: var(--primary-color-disabled) 4px solid;
    transition: border .2s ease-out, color .2s ease-out, background-color .2s ease-out;
  }

  .btn-transparent {
    background-color: transparent;
    border: white 3px solid;
    color: var(--write-color);
    font-weight: bold;
    transition: border .2s ease-out, color .2s ease-out;
  }

  .btn-transparent:hover {
    border: var(--disable-color) 3px solid;
    color: var(--disable-color);
    transition: border .2s ease-out, color .2s ease-out;
    text-decoration: none;
    background-color: transparent;
  }

  .disabled {
    cursor: not-allowed;
    color: #ccc;
    background-color: var(--disable-color) !important;
    border-color: var(--disable-color) !important;
    text-decoration: none;
    opacity: .5;
  }

  .disabled:hover {
    text-decoration: none;
  }
</style>
