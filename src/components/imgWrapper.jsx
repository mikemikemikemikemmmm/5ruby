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
  console.log('imgwrapper')
  const { alt, imgClass, fileName, path } = props
  const [src, setSrc] = React.useState(null)
  React.useEffect(() => {
    const importSrc = async () => {
      const data = await import(`@/assets/img/${path}${fileName}`)
      setSrc(data.default)
    }
    importSrc()
  }, [])
  if (!src) {
    return <span style={{width:'100%'}} className={imgClass}>loading...</span>
  }
  return <img style={{width:'100%'}} src={src} alt={alt} className={imgClass}/>
}

ImgWrapper.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  imgClass: PropTypes.string,
  path: PropTypes.string,
  fileName: PropTypes.string,
};