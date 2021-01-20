import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

import { useRouter } from 'next/router';

import Images from '../assets/images/index';

export default function Header(props) {
  const router = useRouter();

  const headerEn = {
    about: 'About',
    skills: 'Skills',
    work: 'Work',
    resume: 'View my resume',
  };

  const headerFr = {
    about: 'A propos',
    skills: 'Qualifications',
    work: 'Jobs',
    resume: 'Voir mon CV',
  };

  const [lang, setLang] = useState(props.lang);
  const [langData, setLangData] = useState(headerEn);
  const [headerBg, setHeaderBg] = useState('');

  const handleScroll = () => {
    if (window !== undefined) {
      if (window.pageYOffset === 0) {
        setHeaderBg('transparent');
      } else {
        setHeaderBg('');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg" className={headerBg}>
        <button type="button" className="btn navbar-brand" onClick={() => router.push('/')}>Zohary Andrianome</button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">{langData.about}</Nav.Link>
            <Nav.Link href="#skills">{langData.skills}</Nav.Link>
            <Nav.Link href="#work">{langData.work}</Nav.Link>
            <Nav.Link target="_blank" href="https://www.linkedin.com/in/zohary-andrianome"><i className="fab fa-linkedin" /></Nav.Link>
            <Nav.Link target="_blank" href="https://github.com/zoharyAnd"><i className="fab fa-github" /></Nav.Link>
            <Nav.Link target="_blank" href="mailto:zoharyandrianome@gmail.com"><i className="fas fa-envelope" /></Nav.Link>
            <Nav.Link target="_blank" href={lang === 'fr' ? './Zohary Andrianome Resume - Lng Fr.png' : './Zohary Andrianome Resume - Lng En.png'} className="btn btn-resume">{langData.resume}</Nav.Link>

            <Dropdown id="ddl-lang" title="Lang" className="ddl-lang" variant="default">

              <Dropdown.Toggle split variant="default" id="dropdown-toggle-lang" className="btn btn-lang">
                {lang === 'fr' ? <img src={Images.flagFr.default} alt="" /> : <img src={Images.flagEn.default} alt="" />}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <button
                  type="button"
                  className="btn btn-lang"
                  onClick={() => {
                    setLang('en');
                    props.handleChangeLang('en');
                    setLangData(headerEn);
                  }}
                >
                  <img src={Images.flagEn.default} alt="" />
                </button>
                <button
                  type="button"
                  className="btn btn-lang"
                  onClick={() => {
                    setLang('fr');
                    props.handleChangeLang('fr');
                    setLangData(headerFr);
                  }}
                >
                  <img src={Images.flagFr.default} alt="" />
                </button>
              </Dropdown.Menu>
            </Dropdown>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>

  );
}
