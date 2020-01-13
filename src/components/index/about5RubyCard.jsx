import React from 'react';
import PropTypes from 'prop-types';
import ImgWrapper from '@/components/imgWrapper'
export default function about5RubyCard(props) {
  const { title, content, imgSrc ,fileName} = props
  return (
    <div className='about5Ruby'>
      <ImgWrapper fileName={fileName} path='index/about/' alt={title}/>
      <div className='about5Ruby__title'>
        {title}
      </div>
      <div className='about5Ruby__content'>
        <p>
          {content}
        </p>
      </div>
    </div>
  )
}

about5RubyCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string
};