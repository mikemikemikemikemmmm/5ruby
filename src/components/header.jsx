import React from 'react';
import ImgWrapper from './imgWrapper';
import '../assets/style/pages/header.scss';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faCompass } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header className="container-fluid display-flex">
      <Link className="logoLink" to="/">
        <ImgWrapper src={'header/logo.png'} />
      </Link>
      <nav className="navLinkGroup">
        <NavLink to="/" className="navLinkGroup__btn">
          <FontAwesomeIcon icon={faGem} />
          線上課程
        </NavLink>
        <NavLink to="/" className="navLinkGroup__btn">
          <FontAwesomeIcon icon={faCompass} />
          ASTRO Camp
          <div className="ASTRO__signUp">
            報名優惠中
          </div>
        </NavLink >
        <NavLink to="/" className="navLinkGroup__btn">
          短期課程
        </NavLink>
        <NavLink to="/" className="navLinkGroup__btn">
          專案開發
        </NavLink>
        <NavLink to="/" className="navLinkGroup__btn">
          企業代訓
        </NavLink>
        <NavLink to="/" className="navLinkGroup__btn">
          空間租借
        </NavLink>
        <NavLink to="/" className="navLinkGroup__btn">
          最新消息
        </NavLink>
      </nav>
    </header>
  );
}
