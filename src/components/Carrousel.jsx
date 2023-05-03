
import { useState } from 'react';

function Carousel ({pictures}){
  const [index,setIndex] = useState(0)

  return(
<div className='sliderStyles'>
    <div className='slideStyle' style={{ backgroundImage : `url(${pictures[index]})`}}>
    </div>
    </div>
  )
}

export default Carousel