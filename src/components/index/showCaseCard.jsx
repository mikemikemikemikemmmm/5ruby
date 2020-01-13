import React from 'react';
import PropTypes from 'prop-types';
import ImgWrapper from '@/components/imgWrapper'
export default function showCaseCard(props) {
  const { title, content,fileName,cardClass } = props
  return (
    <div className={`showCase ${cardClass}`}>
      <ImgWrapper fileName={fileName} path="index/showCase/" alt={title}/>
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
  imgSrc: PropTypes.string
};