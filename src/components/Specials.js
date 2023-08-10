import React from 'react'
import "../components/styles/Specials.css"
import SpecialsCard from './SpecialsCard'

const Specials = () => {
  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
            <h1>This Week's Specials</h1>
            <button className="btn-menu">Menu</button>
      </div>
      <SpecialsCard />
    </div>
  )
}

export default Specials
