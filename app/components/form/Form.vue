<template src="./Form.pug" lang="pug"></template>

<script>
    import {email, maxLength, minLength, required} from 'vuelidate/lib/validators'
    import Input from "@/components/controls/input/Input.vue";
    import SubmitButton from "@/components/controls/button/PrimaryButton.vue";
    import FormService from "./FormService";
    import {CAPTCHA_WEBSITE_KEY} from '@/customer.config.js';

    export default {
        data() {
            return {
                name: "",
                email: "",
                phone: "",
                showForm: true,
                captchaUserResponse: "",
                formMessage: ""
            };
        },

        mounted() {
            window.grecaptcha.ready(async () => {
                try {
                    this.captchaUserResponse = await window.grecaptcha.execute(CAPTCHA_WEBSITE_KEY, {action: 'homepage'});
                } catch (e) {
                    this.showFormMessage('Es ist ein Fehler aufgetreten, versuchen Sie es später erneut');
                }
            });
        },

        validations: {
            name: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(50)
            },
            email: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(50),
                email
            },
            phone: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(20),
            }
        },
        methods: {
            async sendEmail() {
                if (!this.$v.$invalid) {
                    try {
                        const captchaResult = await FormService.sendCaptchaChallenge(this.captchaUserResponse);
                        if (captchaResult) {
                            const contactResult = await FormService.sendContactForm({
                                firstName: this.extractNames(this.name, 0),
                                lastName: this.extractLastName(this.name),
                                email: this.email,
                                phone: this.phone
                            });

                            if (contactResult.valid) {
                                this.showFormMessage(' Die Terminvereinbarung wurde erfolgreich versendet.');
                            } else {
                                this.showFormMessage('Es ist ein Fehler aufgetreten, versuchen Sie es später erneut');
                            }
                        } else {
                            this.showFormMessage('Es ist ein Fehler aufgetreten, versuchen Sie es später erneut');
                        }
                    } catch (err) {
                        console.error('Error:', err);
                        this.showFormMessage('Es ist ein Fehler aufgetreten, versuchen Sie es später erneut');
                    }
                }
            },
            extractLastName(name) {
                const names = name.split(" ");
                return names.length !== 0 && names[1] !== undefined ? names[1] : this.name;
            },
            extractNames(name, index) {
                const names = name.split(" ");
                return names.length !== 0 && names[index] !== undefined ? names[index] : '';
            },
            showFormMessage(message) {
                this.showForm = false;
                this.formMessage = message;
            }
        },
        components: {
            Input,
            SubmitButton
        }
    }
</script>

<style>
  .form-group label, .form-container .form-error {
    text-align: left !important;
  }
</style>

<style scoped>

  .form-container {
    margin: 0 auto;
    max-width: 800px;
    padding: 30px;
    background-color: rgba(223, 123, 38, .5);
    border-radius: 5px;
  }

  .form-container .title {
    text-align: center;
  }

  .form-container a {
    max-width: 800px;
  }

  .agb {
    font-size: 0.8rem;
  }
</style>
