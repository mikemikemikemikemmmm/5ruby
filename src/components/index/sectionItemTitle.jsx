import React from 'react';
import PropTypes from 'prop-types';

export default function SectionItemTitle(props) {
  const { title } = props
  return (
    <div className='py-5'>
      <h3 className='font-size-5 text-center pb-4'>
        {title}
      </h3>
      <div className='titleUnderLine text-center mx-auto bg-primary'></div>
    </div>
  )
}

SectionItemTitle.propTypes = {
  title: PropTypes.string
};