import React from 'react';
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
  return (
    <img src={require(`../assets/img/${props.src}`).default} alt={props.alt} />
  );
}
