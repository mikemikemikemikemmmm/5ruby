import React from 'react';
import PropTypes from 'prop-types';

export default function SectionContainer(props) {
  return (
    <section className={`container-fluid pb-4 ${props.isGrey ? 'bg-grey' : null} ${props.className?props.className:''}`}>
      {
        props.isFooter ?
          null : <div className={`${props.hasTitleUnderLine ? 'py-5' : 'pt-5'}`}>
            <h3 className='font-size-5 text-center'>
              {props.title}
            </h3>
            {
              props.hasTitleUnderLine ?
                <div className='titleUnderLine text-center mx-auto bg-primary mt-4'></div>
                : null
            }
          </div>
      }
      <div className='row justify-content-center'>
        <div className='row col-10'>
          {props.children}
        </div>
      </div>
    </section>
  )
}

SectionContainer.propTypes = {
  title: PropTypes.string,
  isGrey: PropTypes.bool,
  hasTitleUnderLine: PropTypes.bool,
  isFooter:PropTypes.bool,
  classNams:PropTypes.string
};

SectionContainer.defaultProps = {
  hasTitleUnderLine: true,
  isGrey: false,
  isFooter:false
};