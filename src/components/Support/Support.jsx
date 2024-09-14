import React from 'react'


import A2 from '../../assests/A2.jpg'


const support = () => {
  return (
     <div className='support container section'>
      <div className="sectionContainer">
        <div className="tittlesDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence & Safety</h2>
          <p>Find help with booking and travel plans, see what to expect along the jounery!</p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div className="singleInfo">
              <span className='number'>01</span>
              <h4>Required documents for booking</h4>
              <p>
              You'll typically need your name, date of birth, place of birth, passport issue and expiry date, nationality, and passport number from the document.
              </p>
            </div>

            <div className="singleInfo">
              <span className='number colorOne'>02</span>
              <h4>Safety while sharing documents</h4>
              <p>
              Make sure to maintain safety while sharing your data. Don't share any private information while booking studio.
              </p>
            </div>

            <div className="singleInfo">
              <span className='number colorTwo'>03</span>
              <h4>Happy-Journey!</h4>
              <p>
              Book tickets and Enjoy the journey. for any furture details you can contact using fly@gmail.com.
              </p>
            </div>



          </div>

          <div className="imgDiv">
            <img src={A2}/>
            </div>  
        </div>
      </div>

     </div>
)
}

export default support