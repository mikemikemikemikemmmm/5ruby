import React from 'react';
import PropTypes from 'prop-types';

export default function IndexSectionItemTitle(props) {
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

indexSectionItemTitle.propTypes = {
  title: PropTypes.string
};