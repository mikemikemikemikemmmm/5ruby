import React from 'react'
import '@/assets/style/components/carouselContainer.scss'

export default function CarouselCotainer(props) {
  const { formFeedSecond = 1, children } = props
  const itemLength = children.length
  const refs = React.useRef({
    nowIndex: 0,
    second: formFeedSecond,
    isPause: false,
    items: null,
    maxIndex: null,
    isAutoDirectionRight: true
  });
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
      <button className='nextBtn position- h-100per' onClick={() => handleClick('next')}>
        next
        <div className='bg-white'></div>
        <div className='bg-white'></div>
      </button>
      <button className='prevBtn position- h-100per' onClick={() => handleClick('prev')}>
        prev
        <div className='bg-white'></div>
        <div className='bg-white'></div>
      </button>
      <div className='pointContainer d-flex positon-'>
        {
          children.map((child, index) =>
            <button className='d-inline-block' onClick={() => handleClick(index)}></button>
          )
        }
      </div>
      <div className='carouselItemOutContainer position-r'>
        <div className='carouselItemContainer h-100per'>
          {children.map(item =>
            <div className='carouselItem'>
              {item}
            </div>
          )}
        </div>
      </div>
    </div>)
}
