<template src="./Modal.pug" lang="pug"></template>

<script>
    export default {
        props: ['modalid', 'title']
    }
</script>

<style>
  .modal-title {
    color: black;
  }

  .modal-dialog {
    max-width: 700px !important;
  }
</style>
