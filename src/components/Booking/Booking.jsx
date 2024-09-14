import React from 'react'
import America from '../../assests/America.jpg'
import Aflag from '../../assests/Aflag.png'

import dcity from '../../assests/dcity.jpg'
import df from '../../assests/df.jpg'

import pc from '../../assests/pc.jpg'
import pf from '../../assests/pf.jpg'

import cc from '../../assests/cc.jpg'
import cf from '../../assests/cf.jpg'

//mapping all data using high order array

const booking = [
    {
        id:1,
        destinationImage:America,
        travelerImage:Aflag,
        travelerNames:'America',
        socialLink:'cost:60,000'
    },

    {
        id:2,
        destinationImage:dcity,
        travelerImage:df,
        travelerNames:'Dubai',
        socialLink:'cost:90,000'
    },

    {
        id:3,
        destinationImage:pc,
        travelerImage:pf,
        travelerNames:'Paris',
        socialLink:'cost:80,000'
    },

    {
        id:4,
        destinationImage:cc,
        travelerImage:cf,
        travelerNames:'china',
        socialLink:'cost:30,000'
    },
]

const Booking = () =>{
    return (
        <div className='Booking'>
            <div className="sectionContainer">
                <h2>
                    Travel Packages!
                </h2>

                <div className="travelersContainer grid">
                   {
                      booking.map(({id,destinationImage,travelerImage,travelerNames,socialLink}) =>{
                        return(
                            <div key={id} className="SingleTraveler">
                                <img src={destinationImage} className="destinationImage"/>
    
                             <div className="travelerDetails">
                                <div className="travelerPicture">
                                    <img src={travelerImage} className="travelerImage"/>
                                </div>
                                <div className="travelerNames">
                                    <span>{travelerNames}</span>
                                    <p>{socialLink}</p>
                                </div>
                                </div>
                            
                            </div>

                        )
                     })
                   }
                </div>
            </div>
        </div>
    )
}

export default Booking
