import React from 'react';
import ImgWrapper from './imgWrapper';
import '../assets/style/pages/header.scss';
import { NavLink, Link } from 'react-router-dom'
import "@fortawesome/fontawesome-free"
export default function Header() {
  return (
    <header className='container-fluid display-flex'>
        <Link className='logoLink'>
          <ImgWrapper src={'header/logo.png'} />
        </Link>
        <nav className='navLinkGroup'>
          <NavLink to='/' className='navLinkGroup__btn'><i class="fas fa-gem"></i>線上課程</NavLink >
          <NavLink to='/' className='navLinkGroup__btn'>
            <i class="far fa-compass"></i>
            ASTRO Camp
            <div className='ASTRO__signUp'>報名優惠中</div>
          </NavLink >
          <NavLink to='/' className='navLinkGroup__btn'>短期課程</NavLink >
          <NavLink to='/' className='navLinkGroup__btn'>專案開發</NavLink >
          <NavLink to='/' className='navLinkGroup__btn'>企業代訓</NavLink >
          <NavLink to='/' className='navLinkGroup__btn'>空間租借</NavLink >
          <NavLink to='/' className='navLinkGroup__btn'>最新消息</NavLink >
        </nav>
    </header>
  );
}
