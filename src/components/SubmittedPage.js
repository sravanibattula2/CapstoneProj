import React from 'react';
import "./styles/SubmittedPage.css";
import { Link } from 'react-router-dom';

function ReservationsPage() {

  return (
    <div className="desc-section-background">
        <div className="desc-section-container">
          <div className='desc-section-left'>
            <h1>Little Lemon</h1>
            <h2>Ann Arbor</h2>
            {/* <p>!</p> */}
          </div>
          <div className="form">
                <h1>Your Reservation has been submitted! We look forward to seeing you soon!</h1>
                <p>An email confirmation along with your reservation details has been sent to you.</p>
                <button className="reserve-btn" type="submit"><Link to="/">Return to home</Link></button>
            </div>
        </div>
    </div>
  )
}

export default ReservationsPage