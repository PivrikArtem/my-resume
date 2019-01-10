import React from 'react';
import { withNamespaces } from 'react-i18next';

const AboutMe = ({ t })=>{
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
        <p className="Contact-Information-Header">Git:</p>
        <a href="https://github.com/PivrikArtem" className="Specific-Information Link-My-Git">github.com/PivrikArtem</a>
      </div>
    </div>
      <div>
        Skills
</div>
    </div>

  );
}

const AboutMeWithHoc = withNamespaces()(AboutMe);
export default AboutMeWithHoc;