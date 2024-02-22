import cloud1 from './pics/cloud1.png'
import cloud2 from './pics/cloud2.png'
import cloud3 from './pics/cloud3.png'
import cloud4 from './pics/cloud4.png'
import cloud5 from './pics/cloud5.png'

function Clouds() {
  return (
    <div className='clouds'>
        <img alt='cloud1' src={cloud1} className='cloudOne'/>
        <img alt='cloud2' src={cloud2} className='cloudTwo'/>
        <img alt='cloud3' src={cloud3} className='cloudThree'/>
        <img alt='cloud4' src={cloud4} className='cloudFour'/>
        <img alt='cloud5' src={cloud5} className='cloudFive'/>
    </div>
  )
}

export default Clouds
