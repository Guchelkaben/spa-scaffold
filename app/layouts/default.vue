<template>
  <div>
    <Navigation></Navigation>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
    import Navigation from "@/components/navigation/Navigation.vue";
    import Footer from "@/components/footer/Footer.vue";

    export default {
        components: {
            Navigation,
            Footer
        }
    }
</script>

<style>

</style>
