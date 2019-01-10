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
            <button onClick={() => changeLanguage('en')} >en</button>
            <span>/</span>
            <button onClick={() => changeLanguage('ru')}>ru</button>

          </div>
          <div className="nav-categories">
            <li className="category">
              <Link to='/aboutMe'> {t('about me')}</Link>
            </li >
            <span>/</span>
            <li className="category">
              <Link to='/projects'>{t('my projects')}</Link>
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
