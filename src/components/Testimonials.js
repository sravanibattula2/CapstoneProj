import React from 'react'
import "../components/styles/Testimonials.css"
import TestimonialsCards from './TestimonialsCards'

const Testimonials = () => {
  return (
    <div className="testimonials-section-container">
      <div className="testimonials-section-title">
            <h1>Testimonials</h1>
      </div>
      <TestimonialsCards />
    </div>
  )
}

export default Testimonials
