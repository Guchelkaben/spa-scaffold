import vuelidate from "vuelidate";
import Vue from "vue";
import vuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";

Vue.use(vuelidate);

Vue.use(vuelidateErrorExtractor, {
  template: templates.singleErrorExtractor.foundation6, // you can also pass your own custom template
  messages: {
    required: "Das Feld {attribute} wird benötigt",
    email: "Die angegebene Email ist fehlerhaft",
    maxLength: "Das Feld {attribute} ist zu lang. Es sind {max} Zeichen erlaubt",
    minLength: "Das Feld {attribute} ist zu kurz. Es müssen mehr als {min} Zeichen sein"
  }
});
