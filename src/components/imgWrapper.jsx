import React from 'react'
/**
 * @params {string} props - is path to the img static resource,
 *                          starting assets/img/,
 * @return JSX.element which include correct img src
 */
export default function ImgWrapper(props){
  return (
    <img src={require(`../assets/img/${props.src}`).default}/> 
  )
}