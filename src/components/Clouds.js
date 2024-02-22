import cloud1 from './pics/cloud1.png'
import cloud2 from './pics/cloud2.png'
import cloud3 from './pics/cloud3.png'
import cloud4 from './pics/cloud4.png'
import cloud5 from './pics/cloud5.png'

function Clouds() {
  return (
    <div className='clouds'>
        <img alt='cloud1' src={cloud1}/>
        <img alt='cloud2' src={cloud2}/>
        <img alt='cloud3' src={cloud3}/>
        <img alt='cloud4' src={cloud4}/>
        <img alt='cloud5' src={cloud5}/>
    </div>
  )
}

export default Clouds
