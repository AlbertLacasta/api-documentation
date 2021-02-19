import Vue from 'vue'
import VueI18n from 'vue-i18n'
import LocaleMessageObject = VueI18n.LocaleMessageObject;

Vue.use(VueI18n);

const messages: { [key: string]: LocaleMessageObject } = {
    //ca: require(''),
    //es: require('')
};

export default new VueI18n({
    fallbackLocale: 'es',
    messages: messages
});
