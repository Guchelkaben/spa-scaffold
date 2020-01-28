<template src="./VideoContainer.pug" lang="pug"></template>

<script>

  import videoFile from "@/static/videos.json";

    export default {
        data() {
            return {
                videos: videoFile
            };
        }
    }
</script>

<style scoped>

  .vimeo-video-container {
    position: static;
    margin: 0 auto;
    display: flex;
  }


  .vimeo-video-container h2 {
    text-align: center;
  }

  .video {
    display: block;
    padding: 20px;
    min-width: 320px;
    width: 100%;
  }

  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
  }

  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

  }

</style>
