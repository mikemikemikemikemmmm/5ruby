import React from 'react';
import PropTypes from 'prop-types';

export default function SectionItemTitle(props) {
  const { title } = props
  return (
    <>
      <div className='indexSectionItemTitle__title'>
        {title}
      </div>
      <div className='indexSectionItemTitle__lineUnderTitle'></div>
    </>
  )
}

SectionItemTitle.propTypes = {
  title: PropTypes.string
};