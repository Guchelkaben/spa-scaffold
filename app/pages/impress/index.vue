<template src="./Index.pug" lang="pug"></template>

<script>
    import PagesInfo from "@/static/pages.json";

    export default {
        head() {
            return {
                title: PagesInfo.impress.title,
                meta: [
                    {
                        hid: 'title',
                        name: 'title',
                        content: PagesInfo.impress.title
                    },
                    {
                        hid: 'keywords',
                        name: 'keywords',
                        content: PagesInfo.impress.keywords
                    },
                    {
                        hid: 'description',
                        name: 'description',
                        content: PagesInfo.impress.description
                    },
                    {
                        hid: 'og:title',
                        name: 'og:title',
                        content: PagesInfo.impress.title
                    },
                    {
                        hid: 'og:keywords',
                        name: 'og:keywords',
                        content: PagesInfo.impress.keywords
                    },
                    {
                        hid: 'og:description',
                        name: 'og:description',
                        content: PagesInfo.impress.description
                    },
                    {
                        hid: 'og:description',
                        name: 'og:description',
                        content: PagesInfo.impress.description
                    },
                    {
                        hid: 'og:url',
                        name: 'og:url',
                        content: PagesInfo.impress.url
                    }
                ],
            };
        },
    }
</script>

<style scoped>
  .header {
    height: 450px;
    background-color: var(--primary-color);
    box-shadow: 0 2px 5px 0 gray;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    z-index: 5;
    transform: translateX(-2000px);
    -webkit-animation: slide 0.5s forwards;
    -webkit-animation-delay: .5s;
    animation: slide 0.5s forwards;
    animation-delay: .5s;
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }

  .content {
    padding: 50px 0;
    width: 100%;
    margin: 0 auto;
  }

  .content a {
    color: var(--secondary-color);
    font-weight: 600;
    word-wrap: break-word;
  }

  .content a:hover {
    text-decoration: none;
  }

  .ff-title {
    font-size: 1.4rem;
  }

  .ff-title, .ff-title-small {
    color: var(--primary-color) !important;
    font-weight: 600;
    margin-top: 50px;
  }

  .ff-title-small {
    font-size: 1.2rem;
  }

  .content * {
    text-align: center;
    color: #7f7f7f;
  }

  @-webkit-keyframes slide {
    0% {
      transform: translateX(-2000px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slide {
    0% {
      transform: translateX(-2000px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .page-container {
    background-color: #f8f8f8;
  }

  @media all and (min-width: 768px) {
    .content {
      width: 80%;
    }

    .ff-title {
      font-size: 1.8rem;
    }
  }
</style>
