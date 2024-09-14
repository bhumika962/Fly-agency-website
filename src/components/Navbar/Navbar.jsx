import React , {useState} from 'react'
import {AiOutlineGlobal } from 'react-icons/ai'
import { BsPhoneVibrate } from 'react-icons/bs'
import { SiConsul } from 'react-icons/si'
import { CgMenuGridO } from 'react-icons/cg'
import Airplane from '../../assests/Airplane.png'


const Navbar= () => {
  const [active,setActive]= useState('navBarMenu')
  const showNavBar = ()=>{
    setActive('navBarMenu showNavBar')
   }
   const removeNavBar = ()=>{
    setActive('navBarMenu')
   }

   //Adding bgcolor to second navbar
   const[noBg , addBg]=useState('navBartTwo')
  
   const addBgColor = () => {
    if(window.scrollY >=10){
      addBg('navBartTwo navbar_With_Bg')
    }else{
      addBg('navBartTwo')
    }
   }
   window.addEventListener('scroll',addBgColor)


  
  return (
     <div className='navBar flex'> 
         <div className="navBarOne flex">
          <div>
          <SiConsul className='icon'/>
          </div>

          <div className=' none flex'>
            <li className='flex'> <BsPhoneVibrate className='icons'/> Support </li>
            <li className='flex'> <AiOutlineGlobal className='icons'/> Languages</li>
          </div>

          <div className="atb flex">
            <span><a href="signin.html">Sign In </a></span>
            <span><a href="signin.html">Sign Out</a></span>
          </div>
         </div>
         <div className={noBg}>
          
          <div className="logoDiv">
            <img src={Airplane} className='Airplane'/>
          </div>
        

          <div className={active}>
            <ul className="menu flex">
              <li onClick={removeNavBar} className='listItems'> <a href="index.html">Home</a></li>
              <li onClick={removeNavBar}className='listItems'>About</li>
              <li onClick={removeNavBar}className='listItems'>Offers</li>
              <li onClick={removeNavBar}className='listItems'>Seats</li>
              <li onClick={removeNavBar}className='listItems'>Destination</li>
            </ul>

            <button onClick={removeNavBar} className='btn flex btnOne'>
              contact
              </button>
          </div>

          <div onClick={showNavBar} className='toggleIcon'>
            <CgMenuGridO className='Icon'/>
          </div>
          </div>
     </div>
)
}

export default Navbar