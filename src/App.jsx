import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Search from './components/search/search'
import Support from './components/support/support'
import Footer from './components/Footer/Footer'
import Booking from './components/Booking/booking'
const App = () => {

  return (
     <div> 
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Booking/>
      <Footer/>
     </div>
)
}
export default App