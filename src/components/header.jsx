import React from 'react';
import ImgWrapper from './imgWrapper';
import '../assets/style/pages/header.scss';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faCompass } from '@fortawesome/free-solid-svg-icons'
import data from '@/assets/staticData/header.json'

export default function Header() {
  const RenderNavLink = (data) => {
    return data.map((link, index) => {
      switch (index) {
        case 0:
          return (
            <NavLink to={link.to} className="navLinkGroup__btn">
              <FontAwesomeIcon icon={faGem} />
              {link.title}
            </NavLink>
          )
        case 1:
          return (
            <NavLink to={link.to} className="navLinkGroup__btn">
              <FontAwesomeIcon icon={faCompass} />
              ASTRO Camp
              <div className="ASTRO__signUp">
                {link.title}
              </div>
            </NavLink >
          )
        default:
          return (
            <NavLink to={link.to} className="navLinkGroup__btn">
              {link.title}
            </NavLink>
          )
      }
    })
  }
  return (
    <header className="container-fluid display-flex">
      <Link className="logoLink" to="/">
        <ImgWrapper src={'header/logo.png'} />
      </Link>
      <nav className="navLinkGroup">
        {
          data ?
            RenderNavLink(data)
            : null
        }
      </nav>
    </header>
  );
}
