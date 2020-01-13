import React from 'react';
import PropTypes from 'prop-types';

export default function SectionItemTitle(props) {
  const { title } = props
  return (
    <div className='indexSectionItemTitle'>
      <h3 className='indexSectionItemTitle__title'>
        {title}
      </h3>
      <div className='indexSectionItemTitle__lineUnderTitle'></div>
    </div>
  )
}

SectionItemTitle.propTypes = {
  title: PropTypes.string
};