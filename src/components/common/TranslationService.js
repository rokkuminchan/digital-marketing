import {useTranslation} from 'react-i18next';
const {t} = useTranslation();

export default function translate(key) {
  return t(key);
}
