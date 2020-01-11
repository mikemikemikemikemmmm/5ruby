import React from 'react';
import PropTypes from 'prop-types';
/**
 * @params {object} props - a object include some propertys
 *
 * {string} props.src - img src path relative to assets/img/.
 *
 * {string} props.alt - img alt
 *
 * @example
 *
 * 'if img path is assets/img/header/1.jpg, then src is header/1.jpg.'
 *
 * @return JSX.element which include correct img src
 */
export default function ImgWrapper(props) {
  const requireImg = require(`../assets/img/${props.src}`).default
  const { alt } = props
  return (
    <img src={requireImg} alt={alt} />
  );
}

ImgWrapper.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};