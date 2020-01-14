import React from 'react'
function CarouselItem() {

}
export default function CarouselCotainer(props) {
  console.log(props.children)
  const { formFeedSecond = 5, children } = props
  const ref = useRef({
    nowItemIndex: 0,
    second: formFeedSecond,
    isPause: false
  });

  const handleClickNext = () => {

  }
  const handleClickPrev = () => {

  }
  const handleClickPoint = (itemIndex) => {

  }
  return (
    <div className='carouselCotainer position-r'>
      <div className='nextBtn position-a'>
        <div className='bg-white'></div>
        <div className='bg-white'></div>
      </div>
      <div className='prevBtn position-a'>
        <div className='bg-white'></div>
        <div className='bg-white'></div>
      </div>
      <div className='pointContainer d-flex positon-a'>
        {
          children.map((child, index) => {
            <div className='d-inline-block'>{index}</div>
          })
        }
      </div>
      <div className='carouselCotainer__childrenContainer'>
        {
          children.map(Child => {
            <CarouselItem>
              <Child />
            </CarouselItem>
          })
        }
      </div>
    </div>
  )
}