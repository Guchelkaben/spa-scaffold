<template src="./Index.pug" lang="pug"></template>

<script>
  import Jumbotron from "@/components/jumbotron/Jumbotron.vue";
  import PageStatement from "@/components/page/Page.vue";
  import PrimaryButton from "@/components/controls/button/PrimaryButton.vue";
  import Parallax from "@/components/parallax/Parallax.vue";
  import VideoContainer from "@/components/videocontainer/VideoContainer";
  import Modal from "@/components/modal/Modal.vue";
  import VideoIFrame from "@/components/controls/video/VideoIFrame.vue";
  import PagesInfo from "@/static/pages.json";

  export default {
    head() {
      return {
          title: PagesInfo.index.title,
          meta: [
              {
                  hid: 'title',
                  name: 'title',
                  content: PagesInfo.index.title
              },
              {
                  hid: 'og:title',
                  name: 'og:title',
                  content: PagesInfo.index.title
              },
              {
                  hid: 'og:keywords',
                  name: 'og:keywords',
                  content: PagesInfo.index.keywords
              },
              {
                  hid: 'og:description',
                  name: 'og:description',
                  content: PagesInfo.index.description
              },
              {
                  hid: 'og:url',
                  name: 'og:url',
                  content: PagesInfo.index.url
              }
          ],
      };
    },
    components: {
      Jumbotron,
      PageStatement,
      pbtn: PrimaryButton,
      Parallax,
      VideoContainer,
      Modal,
      VideoIFrame
    }
  }
</script>

<style>
</style>
