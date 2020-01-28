<template src="./Page.pug" lang="pug"></template>

<script>
    import PrimaryButton from "../controls/button/PrimaryButton";

    export default {
        components: {
            pbtn: PrimaryButton
        }
    }
</script>

<style scoped>
  .page-container {
    width: 100%;
    height: 250px;
    background-color: var(--secondary-color);
  }

  .page-content {
    display: flex;
    height: 100%;
    width: 90%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }

  .page-content a {
    display: block;
    margin: 0 auto;
  }

  @media all and (min-width: 736px) {
    .page-content {
      width: 80%;
    }
  }
</style>
