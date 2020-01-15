import React from 'react'
import '@/assets/style/components/carouselContainer.scss'

export default function CarouselCotainer(props) {
  const { formFeedSecond = 5, children } = props
  const itemLength = children.length
  const refInstance = React.useRef({
    nowItemIndex: 0,
    second: formFeedSecond,
    isPause: false,
  });

  React.useEffect(() => {
    const carouselItems = document.querySelectorAll('.carouselItem')
    function zLength() {
      const containerWidth = document.querySelector('.carouselItemOutContainer').offsetWidth
      return (containerWidth / 2) / Math.tan(Math.PI / (carouselItems.length))
    }
    function rotate(toIndex=0) {
      for (let i = 0; i < carouselItems.length; i++) {
        carouselItems[i].style.transform = `rotateY(${(360 / carouselItems.length) * i+(360*toIndex / carouselItems.length) }deg) translateZ(${zLength()}px translateZ(${zLength()}px)`
      }
    }
    function initZPosition(a=0) {
      for (let i = 0; i < carouselItems.length; i++) {
        console.log(zLength())
        carouselItems[i].style.transform = `rotateY(${(360/ carouselItems.length) * i+a}deg) translateZ(${zLength()/2}px)`
        carouselItems[i].style.left = `${-i*100}px`
        
      }
    }
    initZPosition()
  }, [])


  /* const rotateCarousel = (selectedIndex) => {
       if (isPause) {
         return
       }
       const angle = selectedIndex / itemLength * -360;
       ref.current.container.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
     }
     radius = (outContainer.current.offsetWidth / 2) / Math.tan(Math.PI / (itemLength))*/
  /*
    const rotateCarousel = (selectedIndex) => {
      if (isPause) {
        return
      }
      const angle = selectedIndex / itemLength * -360;
      ref.current.container.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
    }*/
  const handleClickPrev = () => {
  }
  const handleClickNext = () => {

  }
  const handleClickPoint = (itemIndex) => {

  }
  return (
    <div className='carouselCotainer position-r w-100per h-100per'>
      <button className='nextBtn position-a h-100per'>
        <div className='bg-white'></div>
        <div className='bg-white'></div>
      </button>
      <button className='prevBtn position-a h-100per'>
        <div className='bg-white'></div>
        <div className='bg-white'></div>
      </button>
      <div className='pointContainer d-flex positon-a'>
        {
          children.map((child, index) => {
            <button className='d-inline-block'></button>
          })
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
