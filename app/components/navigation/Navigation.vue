<template src="./Navigation.pug" lang="pug"></template>

<script>
  export default {
    data() {
      return {
        navItems: [
          {
            title: 'Startseite',
            url: '/'
          },
          {
            title: 'Referenzen',
            url: '/references'
          },
          {
            title: 'Terminvereinbarung',
            url: '/appointment'
          }
        ]
      };
    },
    methods: {
      onBurgerButtonClick() {
        if (this.$refs.burgerButton.show) {
          this.$refs.burgerButton.show = false;
        }
      }
    }
  }
</script>

<style>

  .navigation {
    width: 100%;
    margin-top: 20px;
    position: absolute;
    z-index: 2;
  }

  #nav-collapse {
    width: 90%;
    margin: 0 auto;
  }

  .navbar {
    padding: 0.5rem 0;
  }

  .navigation #nav-collapse {
    justify-content: flex-end !important;
  }

  .navbar-collapse ul:last-of-type {
    margin-right: 0 !important;
  }

  #nav-collapse ul {
    margin: 5px 30px 5px 0
  }

  /* Set color for nav anchors */
  .navigation a {
    color: var(--write-color) !important;
    font-weight: 300;
    font-size: 16px;
  }

  .navigation .bg-info {
    background-color: transparent !important;
  }

  .navbar-nav {
    position: relative;
    margin-top: 10px !important;
  }

  .nav-item {
    font-size: 16px !important;
  }

  #nav-collapse a:hover {
    text-decoration: none;
  }

  #nav-collapse ul:hover .nav-hover {
    position: absolute;
    display: flex;
    top: 30px;
    margin: 0 auto;
    width: 100%;
    border-bottom: var(--secondary-color) 2px solid;
    text-decoration: none;
    -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: example;
    animation-duration: 4s;
  }

  .navbar-brand {
    font-size: 1.2rem !important;
  }

  .navigation nav {
    width: 90%;
    margin: 0 auto;
  }

  .navbar-toggler {
    color: white !important;
    border: 2px solid;
  }

  @keyframes example {
    0% {
      top: 30px;
    }
    20% {
      top: 20px;
    }
    50% {
      top: 20px;
    }
    70% {
      top: 20px;
    }
    100% {
      top: 30px;
    }
  }

  @media all and (min-width: 768px) {
    .nav-item {
      font-size: 16px !important;
    }

    .navbar-nav {
      margin-top: 0 !important;
    }

    .navigation nav {
      width: 80%;
      margin: 0 auto;
    }
  }
</style>
