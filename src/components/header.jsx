import React from 'react'
import ImgWrapper from './imgWrapper'
export default function Header() {
  return (
    <header className='container-fluid display-flex'>
      <ImgWrapper src={'header/logo.png'} />
      <nav>
        <ul>
          <li>線上課程</li>
          <li>ASTRO Camp</li>
          <li>短期課程</li>
          <li>專案開發</li>
          <li>企業代訓</li>
          <li>空間租借</li>
          <li>最新消息</li>
        </ul>
      </nav>
    </header>
  );
}