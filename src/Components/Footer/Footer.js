import React from "react";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="Wrapper-Footer">
      <div className="footer-container">
        <div className="my-footer-name">AP inc.</div>
        <div className="link-wrapper">
          <a href="https://t.me/ArtemPivrik" className="fab fa-telegram-plane">tel </a>
          <a href="https://github.com/PivrikArtem" className="fab fa-github">Git </a>
        </div>
      </div>
    </div>
  )
}