import i18n  from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
	.use(HttpApi)
	.use(initReactI18next)
	.init({
		debug: process.env.NODE_ENV === 'development',
		lng: 'en',
		fallbackLng: 'en',
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
	});
