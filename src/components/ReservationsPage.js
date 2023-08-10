import React from 'react';
import "./styles/ReservationsContent.css";
import Form from './Form';

function ReservationsPage() {

  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
          <div className='headers'>
            <h1>Little Lemon</h1>
            <h2>Ann Arbor</h2>
            <p>Find a Table for any occassion!</p>
          </div>
          <div className="form">
                <h1>Reserve a Table</h1>
                <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                <Form />
            </div>
        </div>
    </div>
  )
}

export default ReservationsPage