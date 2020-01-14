import React from 'react';
import PropTypes from 'prop-types';
import ImgWrapper from '@/components/imgWrapper'
export default function showCaseCard(props) {
  const { title, content,fileName,cardClass } = props
  return (
    <div className={cardClass}>
      <div className='card-border'>
      <ImgWrapper fileName={fileName} path="index/showCase/" alt={title}/>
      <div className='px-3 my-3 font-size-4 text-title'>
        {title}
      </div>
      <div className='px-3 text-content font-size-2 mb-5'>
        <p>
          {content}
        </p>
      </div>
    </div>
    </div>
  )
}

showCaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string
};