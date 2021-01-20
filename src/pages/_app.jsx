import React, { useState } from 'react';
import { Header } from '../components/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-circular-progressbar/dist/styles.css';
import '../assets/scss/main.scss';

const App = ({ Component, pageProps }) => {
  // eslint-disable-next-line no-unused-vars
  const [lang, setLang] = useState('en');

  const handleChangeLang = (value) => {
    setLang(value);
    return value;
  };

  return (
    <>
      <Header handleChangeLang={handleChangeLang} lang={lang} />
      <Component {...pageProps} lang={lang} />
    </>
  );
};
export default App;
