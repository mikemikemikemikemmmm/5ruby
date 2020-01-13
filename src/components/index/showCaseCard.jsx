import React from 'react';
import PropTypes from 'prop-types';
import ImgWrapper from '@/components/imgWrapper'
export default function showCaseCard(props) {
  const { title, content, imgSrc } = props
  console.log(imgSrc)
  return (
    <div className='showCase'>
      <ImgWrapper src={imgSrc}  alt={title}/>
      <div className='showCase__title'>
        {title}
      </div>
      <div className='showCase__content'>
        <p>
          {content}
        </p>
      </div>
    </div>
  )
}

showCaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
};