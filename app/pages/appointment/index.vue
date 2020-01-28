<template src="./Index.pug" lang="pug"></template>

<script>
    import Form from '@/components/form/Form.vue';
    import Jumbotron from "@/components/jumbotron/Jumbotron.vue";
    import PagesInfo from "@/static/pages.json";

    export default {
        head() {
            return {
                title: PagesInfo.appointment.title,
                meta: [
                    {
                        hid: 'title',
                        name: 'title',
                        content: PagesInfo.appointment.title
                    },
                    {
                        hid: 'keywords',
                        name: 'keywords',
                        content: PagesInfo.appointment.keywords
                    },
                    {
                        hid: 'description',
                        name: 'description',
                        content: PagesInfo.appointment.description
                    },
                    {
                        hid: 'og:title',
                        name: 'og:title',
                        content: PagesInfo.appointment.title
                    },
                    {
                        hid: 'og:keywords',
                        name: 'og:keywords',
                        content: PagesInfo.appointment.keywords
                    },
                    {
                        hid: 'og:description',
                        name: 'og:description',
                        content: PagesInfo.appointment.description
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
        components: {
            Form,
            Jumbotron
        }
    }
</script>

<style scoped>

</style>
