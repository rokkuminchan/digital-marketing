import i18next from 'i18next';

i18next.init({
    fallbackLng: 'jp',
    resources: {
        jp: {
            translations: require('../locales/jp/translations.json')
        },
        vi: {
            translations: require('../locales/vi/translations.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    react: {
        wait: true,
    },
});

i18next.languages = ['jp', 'vi'];

export default i18next;