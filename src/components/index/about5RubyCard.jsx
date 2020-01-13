import React from 'react';
import PropTypes from 'prop-types';
import ImgWrapper from '@/components/imgWrapper'
export default function about5RubyCard(props) {
  const { title, content, cardClass, fileName, title2 } = props
  return (
    <div className={`about5Ruby ${cardClass}`}>
      <ImgWrapper fileName={fileName} path='index/about/' alt={title} imgClass='about5Ruby__img' />
      <div className='about5Ruby__title'>
        {title}
        <br/>
          {title2}
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