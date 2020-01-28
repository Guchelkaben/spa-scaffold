<template src="./Index.pug" lang="pug"></template>

<script>
    import Reference from "@/components/reference/Reference";
    import References from "@/static/references.json";
    import PagesInfo from "@/static/pages.json";

    export default {
        head() {
            return {
                title: PagesInfo.privacystatement.title,
                meta: [
                    {
                        hid: 'title',
                        name: 'title',
                        content: PagesInfo.privacystatement.title
                    },
                    {
                        hid: 'keywords',
                        name: 'keywords',
                        content: PagesInfo.privacystatement.keywords
                    },
                    {
                        hid: 'description',
                        name: 'description',
                        content: PagesInfo.privacystatement.description
                    },
                    {
                        hid: 'og:title',
                        name: 'og:title',
                        content: PagesInfo.privacystatement.title
                    },
                    {
                        hid: 'og:keywords',
                        name: 'og:keywords',
                        content: PagesInfo.privacystatement.keywords
                    },
                    {
                        hid: 'og:description',
                        name: 'og:description',
                        content: PagesInfo.privacystatement.description
                    },
                    {
                        hid: 'og:description',
                        name: 'og:description',
                        content: PagesInfo.privacystatement.description
                    },
                    {
                        hid: 'og:url',
                        name: 'og:url',
                        content: PagesInfo.privacystatement.url
                    }
                ],
            };
        },
        data() {
            return {
                references: References
            };
        },
        components: {
            Reference
        }
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

  .content ul li {
    text-align: left;
    margin: 20px 0;
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

  @media all and (min-width: 768px) {
    .content {
      width: 80%;
    }

    .ff-title {
      font-size: 1.8rem;
    }
  }
</style>
