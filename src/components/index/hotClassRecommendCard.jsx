import React from 'react';
import PropTypes from 'prop-types';
import ImgWrapper from '@/components/imgWrapper'
const statusObj = {
  '1': 'open'
}
export default function hotClassRecommendCard(props) {
  const { title, content, imgSrc, date, hours, status, author } = props
  return (
    <div className='hotClassRecommend'>
      <ImgWrapper src={imgSrc} />
      <div className='hotClassRecommend__title'>
        {title}
      </div>
      <div>
        <div className='hotClassRecommend__status'>
          {status}
        </div>
        <div className='hotClassRecommend__date'>
          {date}
        </div>
      </div>
      <div className='hotClassRecommend__content'>
        <p>
          {content}
        </p>
      </div>
      <div className='hotClassRecommend__footer'>
        講者： {author} | 時數： {hours} 小時
      </div>
    </div>
  )
}

hotClassRecommendCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  hours: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired
};