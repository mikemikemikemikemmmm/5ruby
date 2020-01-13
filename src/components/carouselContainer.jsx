import React from 'react'
function CarouselItem() {

}
export default function CarouselCotainer(props) {
  const { formFeedSecond = 5 ,children} = props
  const handleClickNext=()=>{

  }
  const handleClickPrev=()=>{
    
  }
  const handleClickPoint=()=>{
    
  }
  return (
    <div className='carouselCotainer'>
      <div className='carouselCotainer__nextBtn'></div>
      <div className='carouselCotainer__prevBtn'></div>
      <div className='carouselCotainer__pointContainer'></div>
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