import React, { Component } from 'react';
import { Link, HashRouter, Route } from 'react-router-dom';
import AboutMe from './../AboutMe/AboutMe';
import MyProjects from './../MyProjects/MyProjects';
import { Footer } from './../Footer/Footer';
import s from './../MyResume/MyResume.module.css';

class MyResume extends Component {
  render() {
    return (
      <HashRouter>
        <div className={s.myResume}>
          <nav className={s.nav}>
            <div className="Wrapper-Language">
              <a  href='' className="Languages-Flag" /*onClick={() => changeLanguage('en')}*/ >en</a>
              <span>/</span>
              <a href='' className="Languages-Flag" /*onClick={() => changeLanguage('ru')}*/>ru</a>
            </div>
            <div className="nav-categories">
              <li className="category">
                <Link to='/aboutMe'>about me</Link>
              </li >
              <span>/</span>
              <li className="category">
                <Link to='/projects'>my projects</Link>
              </li>
            </div>

          </nav>
          <section className={s.section}>
            <Route exact path="/" component={AboutMe} />
            <Route path='/aboutMe' component={AboutMe} />
            <Route path='/projects' component={MyProjects} />
          </section>
          <footer className={s.footer}>
            <Footer />
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default MyResume;
