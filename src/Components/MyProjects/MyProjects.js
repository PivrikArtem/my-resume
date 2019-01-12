import React from 'react';
import "./MyProjects.css";
import { withNamespaces } from 'react-i18next';

const MyProjects  = ({t})=> {  
    return (
      <div className="Wrapper-My-Projects">
        <div className="first-line">
          <div className="wrapper-project-todolist">
            <div className="full-information-about-todolist">
              <p className="name-project">{t('to do list')}<span className="star">*</span></p>
              <p className="about-todolist">
                -{t('Work with objects')};<br />
                -{t('Working with patterned strings')};<br />
                -{t('Ajax requests using jquery')};<br />
                (get, post, delete, put)<br />
                -{t('Using ES6 syntax')};<br />
                -{t('Using promise when working with ajax requests')};<br />
                -{t('Adherence to the principle Dependency Injection')};<br />
                -{t('Layout with flexbox')};<br />
                -{t('Layout with bootstrap')};<br />
                -{t('Work with Less')};<br />
              </p>
            </div>
            <div className="wrapper-image">
              <a href="https://odnolko_andrew.gitlab.io/mytodolist_js" className="image-todolist"> </a>
            </div>
          </div>
          <div className="wrapper-project-calculator">
            <div className="full-information-about-calculator">
              <p className="name-project">{t('calculator')}<span className="star">*</span></p>
              <p className="about-calculator">
                -{t('Work with objects')};<br />
                -{t('Working with patterned strings')};<br />
                -{t('Using ES6 syntax')};<br />
                -{t('Layout with flexbox')};<br />
              </p>
            </div>
            <div className="wrapper-image">
              <a href="https://pivrikartem.github.io/Calculator/calculator.html" className="image-calculator"> </a>
            </div>
          </div>
        </div>
        <div className="second-line">
          <div className="wrapper-project-hi5">
            <div className="full-information-about-hi5">
              <p className="name-project">hi5<span className="star">*</span>
              </p>
              <p className="about-hi5">
                -{t('website design development from scratch')} (Photoshop);<br />
                -{t('Layout with flexbox')};<br />
                -{t('Work with Less')};<br />
                -{t('Work with jquery')};</p>  
            </div>
            <div className="wrapper-image">
              <a href="https://odnolko_andrew.gitlab.io/hi5-metropol" className="image-hi5"> </a>
            </div>
          </div>
          <div className="wrapper-project-fruit-basket">
            <div className="full-information-about-fruit-basket">
              <p className="name-project">{t('fruit basket')}<span className="star">*</span>
              </p>
              <p className="about-fruit-basket">
                -{t('Work with objects')};<br />
                -{t('Working with patterned strings')};<br />
                -{t('Using ES6 syntax')};<br />
                -{t('Work with Local Storage')};<br />
                (setItem, getItem, clear)<br />
                -{t('Layout with flexbox')};<br />
                -{t('Layout with bootstrap')};<br />
                -{t('Work with Less')};<br />
              </p>
            </div>
            <div className="wrapper-image">
              <a href="https://pivrikartem.github.io/js/3%20Basket%20with%20Fruicts/index8.html" className="image-fruit-basket"> </a>
            </div>
          </div>
        </div>
        <span className="wrapper-about-start">
          <span className="star">*</span> - {t('to click on the image to view the project')}</span>
      </div>
    );
  }

const MyProjectsWithHoc = withNamespaces()(MyProjects) 

export default MyProjectsWithHoc;
