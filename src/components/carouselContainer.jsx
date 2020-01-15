import React from 'react'
import '@/assets/style/components/carouselContainer.scss'

export default function CarouselCotainer(props) {
  const { formFeedSecond = 5, children } = props
  const refs = React.useRef({
    nowIndex: 0,
    second: formFeedSecond,
    isPause: false,
    items: null,
    maxIndex: null,
    isAutoDirectionRight: true
  });
  const [nowIndex,setNowIndex] = React.useState(0)
  const _refs = refs.current
  React.useEffect(() => {
    const runAutoRotate = () => {
      setTimeout(() => autoRotate(), _refs.second * 1000)
    }
    const autoRotate = () => {
      if (_refs.isPause) {
        return
      }
      if (_refs.nowIndex === _refs.maxIndex) {
        _refs.isAutoDirectionRight = false
      } else if (_refs.nowIndex === 0) {
        _refs.isAutoDirectionRight = true
      }
      if (_refs.isAutoDirectionRight) {
        _refs.nowIndex += 1
      } else {
        _refs.nowIndex -= 1
      }
      rotate()
      runAutoRotate()
    }
    _refs.items = document.querySelectorAll('.carouselItem')
    _refs.maxIndex = _refs.items.length - 1
    runAutoRotate()
  }, [])
  const rotate = () => {
    _refs.items.forEach((item, index) => {
      item.style.transform = `translateX(${_refs.nowIndex * -100}%)`
    })
  }
  const handleClick = (value) => {
    if (value === 'next') {
      if (_refs.nowIndex >= _refs.maxIndex) {
        return
      }
      _refs.nowIndex += 1
    } else if (value === 'prev') {
      if (_refs.nowIndex <= 0) {
        return
      }
      _refs.nowIndex -= 1
    }
    else {
      _refs.nowIndex = value
    }
    _refs.isPause = true
    rotate()
  }

  return (
    <div className='carouselCotainer position-r w-100per h-100per'>
      <button className='arrowBtn arrowBtn--next position-a h-100per flex-center text-white' onClick={() => handleClick('next')}>
        &gt;
      </button>
      <button className='arrowBtn arrowBtn--prev position-a h-100per flex-center text-white' onClick={() => handleClick('prev')}>
        &lt;
      </button>
      <div className='pointContainer flex-center position-a w-100per'>
        {
          children.map((child, index) =>
            <button className={`carouselPoint carouselPoint ${_refs.nowIndex === index?'carouselPoint--active':''}`} onClick={() => handleClick(index)}></button>
          )
        }
      </div>
      <div className='carouselItemOutContainer position-r'>
        <div className='carouselItemContainer h-100per' style={{ whiteSpace: 'nowrap' }}>
          {children.map(item =>
            <div className='carouselItem d-inline-block position-r'>
              {item}
            </div>
          )}
        </div>
      </div>
    </div>)
}
