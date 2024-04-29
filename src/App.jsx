
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login'
import Landing from './Components/Landing'
import Booking from './Components/Booking'
import TicketBooking from './Components/Booking2'
import Payment from './Components/Payment'
import ConfirmationPage from './Components/Confirm'
import List from './Components/List'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/landing' element={<Landing/>} />
      <Route path='/booking' element={<Booking/>} />
      <Route path='/booking2' element={<TicketBooking/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/confirm' element={<ConfirmationPage/>} />
      <Route path='/list' element={<List/>} />

    </Routes>
    
    </>
    
  )
}

export default App
