import React from 'react';
import "../components/styles/Description.css";
import Image from "../components/assets/chefs.jpeg"

const Description = () => {
  return (
    <>
      <div className="desc-section-background">
          <div className="desc-section-container">
            <div className='desc-section-left'>
                <h1>Little Lemon</h1>
                <h2>Ann Arbor</h2>
                <p>We are a family owned restaurant, born from humble deli creations. Today, Ann Arbor&apos;s beloved restaurant celebrates 27 years of bringing you classic dishes, with a twist. Reserve a table or Order Online now!</p>
            </div>
            <div className='desc-section-right'>
              <div className='desc-img-box'>
                <img className="desc-img" src={Image} alt="description-pic"/>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Description