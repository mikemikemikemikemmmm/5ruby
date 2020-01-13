import React from 'react';
import PropTypes from 'prop-types';
import ImgWrapper from '@/components/imgWrapper'

const status = {
  "open": "已確定開課",
  "none": ""
}
const authors = {
  "1": "高見龍 (Eddie Kao)",
  "2": "蘇泰安 (Taian Su)",
  "3": "李建杭 (Amos Lee)"
}

export default function hotClassRecommendCard(props) {
  const { title, content, imgSrc, date, hours, statusIndex, authorIndex } = props
  return (
    <div className='hotClassRecommend'>
      <ImgWrapper src={imgSrc} />
      <div className='hotClassRecommend__title'>
        {title}
      </div>
      <div>
        <div className='hotClassRecommend__status'>
          {status[statusIndex]}
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
        講者： {authors[authorIndex]} | 時數： {hours} 小時
      </div>
    </div>
  )
}

hotClassRecommendCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  statusIndex: PropTypes.string.isRequired,
  authorIndex: PropTypes.string.isRequired
};