import React from 'react'
import homevideo from '../../assests/homevideo.mp4'
import homephoto from '../../assests/homephoto.png'

const Home = () => {
  return (
     <div className='home flex container'>
        
        
        <div className='maintext'>
          <h1>Welcome to FLY</h1>
          <h3>Discover Your Next Adventure!</h3>
          <h4>At FLY, we believe that travel is more than just a destination—it's an experience. 
          </h4>
        </div>

      <div className="homeImages flex">
       
        <div className="videoDiv">
          <video src={homevideo} autoPlay muted loop className='video'></video>
        </div>

        <img src={homephoto}className='plane'/>
      </div>
     </div>
) 
}

export default Home