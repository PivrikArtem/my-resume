import React from 'react';
import { withNamespaces } from 'react-i18next';
import './AboutMe.css';

const AboutMe = ({ t }) => {
  return (
    <div className="About-Me-Page">
      <div className="Contact-Information">
        <div className="My-Photo"> </div>
        <div className="My-Name">
          <p className="First-Name">{t('Artem')}</p>
          <p className="Surname">{t('Pivrik')}</p>
        </div>
        <div className="My">
          <p className="Contact-Information-Header">{t('Address')}</p>
          <p className="Specific-Information">
            {t('Minsk')},<br />
            {t('Belarus')}
          </p>
        </div>
        <div className="My">
          <p className="Contact-Information-Header">{t('Phone')}:</p>
          <p className="Specific-Information">+37529-2591893</p>
        </div>
        <div className="My">
          <p className="Contact-Information-Header">{t('E-mail')}:</p>
          <p className="Specific-Information">artempivrik90@gmail.com</p>
        </div>
        <div className="My">
          <p className="Contact-Information-Header">Skype:</p>
          <p className="Specific-Information">artem_pivrik23mail.ru</p>
        </div>
        <div className="My">
          <p className="Contact-Information-Header">Git:</p>
          <a href="https://github.com/PivrikArtem" className="Specific-Information Link-My-Git">github.com/PivrikArtem</a>
        </div>
      </div>
      <div className="About-Me-Information">
        <div className="Education-Experience-And-Skills">
          <p className="Information-Section-Name">{t('Education')}</p>
          <p className="Full-Description">
            {t('Polotsk State University')}.<br />
            {t('Faculty of civil engineering')}.<br />
          </p>
          <p className="Full-Description">
            {t('Belarusian State University')}.<br />
            {t('Mechanics and Mathematics Faculty')},<br />
            {t('a second year student(second education)')}.<br />
          </p>
        </div>
        <div className="Education-Experience-And-Skills">
          <p className="Information-Section-Name">{t('Experience and skills')}</p>
          <p className="Full-Description">
            -{t('startup more than 4 months')};<br />
            -{t('attend hackatons and conferences')}<br />
            -{t('confident knowledge of vanilla js')}<br />
            reduce, promise, fetch, etc.)<br />
            -{t('team work with git')},<br />
            pull, commit);<br />
            -{t('work with ajax queries using jquery')}<br />
            {t('and axios')};
            </p>
        </div>
        <div className="Education-Experience-And-Skills">
          <p className="Information-Section-Name">{t('Skills')}</p>
          <p className="Full-Description">
            -HTML5, CSS3;<br />
            -Bootstrap, Less;<br />
            -Grid, Flexbox<br />
            -JavaScript;<br />
            -React, Redux;<br />
            -GitHub;<br />
            -ООP, SOLID;<br />
            -Ajax;<br />
            -MVC;<br />
            -Unit tests(Mocha);<br />
            -VS Code, WebStorm;
            </p>
        </div>
        <div className="Education-Experience-And-Skills">
          <p className="Information-Section-Name">{t('Previously read books')}</p>
          <p className="Full-Description">
            -{t('Head First JavaScript Programming  E.Freeman, E.Robson')};<br />
            -{t('Learning React.Functional Web Development ')}<br />
            {t(' with React and Redux  A.Banks E.Porcello')};<br />
            -{t('JavaScript Patterns S.Stefanov')};<br />
          </p>
        </div>
        <div className="Education-Experience-And-Skills">
          <p className="Information-Section-Name">{t('Additional knowledge')}</p>
          <p className="Full-Description">
            {t('Level of knowledge of English')}<br />
            {t('I confidently read technical literature')},<br />
            {t('and talk on simple topics')}
          </p>
        </div>
      </div>
    </div>

  );
}

const AboutMeWithHoc = withNamespaces()(AboutMe);
export default AboutMeWithHoc;