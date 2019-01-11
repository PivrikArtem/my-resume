import React from 'react';
import { Link, HashRouter, Route } from 'react-router-dom';
import AboutMeWithHoc from './../AboutMe/AboutMe';
import MyProjects from './../MyProjects/MyProjects';
import { Footer } from './../Footer/Footer';
import s from './../MyResume/MyResume.module.css';
import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n';

const MyResume = ({ t }) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <HashRouter>
      <div className={s.myResume}>
        <nav className={s.nav}>
          <div className="Wrapper-Language">
            <li onClick={() => changeLanguage('en')} >en</li>
            <span>/</span>
            <li onClick={() => changeLanguage('ru')}>ru</li>

          </div>
          <div className="nav-categories">
            <li className="category">
              <Link to='/aboutMe' className="link"> {t('about me')}</Link>
            </li >
            <span>/</span>
            <li className="category">
              <Link to='/projects' className="link">{t('my projects')}</Link>
            </li>
          </div>

        </nav>
        <section className={s.section}>
          <Route exact path="/" component={AboutMeWithHoc} />
          <Route path='/aboutMe' component={AboutMeWithHoc} />
          <Route path='/projects' component={MyProjects} />
        </section>
        <footer className={s.footer}>
          <Footer />
        </footer>
      </div>
    </HashRouter>
  );
}

const MyResumeWithHoc = withNamespaces()(MyResume);
export default MyResumeWithHoc
