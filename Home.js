import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
const navigate = useNavigate()

  return (
    <div>
    <div>Home Page</div>
    <button onClick={()=> navigate('order-summary')}>Platz order </button>
    <button onClick={()=> navigate('order-summary')}>Platz order </button>
    </div>
  )
}
