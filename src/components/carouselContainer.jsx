import React from 'react'
import useStatewithCB from '@/utils/useStatewithCB'
import '@/assets/style/components/carouselContainer.scss'

export default function CarouselCotainer(props) {
  const { formFeedSecond = 5, children, isClassRecommend,itemKeyClass } = props
  const refs = React.useRef({
    nowIndex: null,
    second: formFeedSecond,
    isPause: false,
    items: null,
    maxIndex: null,
    isAutoDirectionRight: true
  });
  const _refs = refs.current
  const [nowIndex, setNowIndex] = useStatewithCB(0)
  _refs.nowIndex = nowIndex //memorize nowIndex
  React.useEffect(() => {
    const runAutoRotate = () => {
      setTimeout(() => autoRotate(), _refs.second * 1000)
    }
    const autoRotate = () => {
      const cb = () => {
        rotate()
        runAutoRotate()
      }
      if (_refs.isPause) {
        return
      }
      if (_refs.nowIndex >= _refs.maxIndex) {
        _refs.isAutoDirectionRight = false
      } else if (_refs.nowIndex <= 0) {
        _refs.isAutoDirectionRight = true
      }
      if (_refs.isAutoDirectionRight) {
        setNowIndex(_refs.nowIndex + 1, cb)
      } else {
        setNowIndex(_refs.nowIndex - 1, cb)
      }
    }
    _refs.items = document.querySelectorAll(`.${itemKeyClass}`)
    _refs.maxIndex = _refs.items.length - 1
    runAutoRotate()
  }, [])
  const rotate = () => {
    _refs.items.forEach((item, index) => {
      item.style.transform = `translateX(${_refs.nowIndex * -100}%)`
    })
  }
  const handleClick = (value) => {
    const cb = () => {
      _refs.isPause = true
      rotate()
    }
    if (value === 'next') {
      if (_refs.nowIndex >= _refs.maxIndex) {
        return
      }
      setNowIndex(_refs.nowIndex + 1, cb)
    } else if (value === 'prev') {
      if (_refs.nowIndex <= 0) {
        return
      }
      setNowIndex(_refs.nowIndex - 1, cb)
    }
    else {
      setNowIndex(value, cb)
    }
  }

  return (
    <div className='carouselCotainer position-r w-100per h-100per'>
      {!isClassRecommend ?
        <>
          <button className='arrowBtn arrowBtn--next position-a h-100per flex-center' onClick={() => handleClick('next')}>
            &gt;
      </button>
          <button className='arrowBtn arrowBtn--prev position-a h-100per flex-center' onClick={() => handleClick('prev')}>
            &lt;
      </button>
          <div className='pointContainer flex-center position-a w-100per'>
            {
              children.map((child, index) =>
                <button className={`carouselPoint carouselPoint ${nowIndex === index ? 'carouselPoint--active' : ''}`} onClick={() => handleClick(index)}></button>
              )
            }
          </div></> : null}
      <div className='carouselItemOutContainer position-r'>
        <div className='carouselItemContainer h-100per' style={{ whiteSpace: 'nowrap' }}>
          {children.map(item =>
            <div className={`carouselItem d-inline-block position-r ${itemKeyClass}`}>
              {item}
            </div>
          )}
        </div>
      </div>
    </div>)
}
