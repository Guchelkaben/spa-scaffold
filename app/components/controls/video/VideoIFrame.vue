<template src="./VideoIFrame.pug" lang="pug"></template>

<script>
    export default {
        props: ['url', 'description']
    }
</script>

<style scoped>
  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
  }

  .videoWrapper h1 {
    text-align: center !important;
  }

  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
