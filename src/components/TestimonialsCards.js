import React from 'react'
import "../components/styles/TestimonialsCard.css"
import Person1 from "../components/assets/img1.png"
import Person2 from "../components/assets/img2.png"
import Person3 from "../components/assets/img3.png"
import Stars from "../components/assets/stars.png"

const TestimonialsCard = () => {
    const Reviews = [
        {   
            image: Person1,
            name: "Jason Cross",
            rating: Stars,
            review: "WOW! This is my favorite restaurant in Ann Arbor by far. The lemon dessert is to die for!"
        },
        {
            image: Person2,
            name: "Marie Kay",
            rating: Stars,
            review: "Accidently stumbled upon this place and I am so glad I did! The food is incrediblelt tasty!"
        },
        {
            image: Person3,
            name: "Vivian Cox",
            rating: Stars,
            review: "Not only is the food some of the best I've had (greek salad), the service is also impeccable."
        }
    ]

    const Testimonials = Reviews.map(person => {
            const image = person.image;
            const name = person.name;
            const review = person.review
            const rating = person.rating
            
            return (
                <div>
                    <div className="testimonial-card-container">
                        <div className='top'>
                            <div className="test-image-container">
                                    <img src={image} alt="person" />
                            </div>
                            <div className='name'>
                                <h3>{name}</h3>
                                <img src = {rating} alt='stars' />
                                <img src = {rating} alt='stars' />
                                <img src = {rating} alt='stars' />
                                <img src = {rating} alt='stars' />
                                <img src = {rating} alt='stars' />
                            </div>
                        </div>
                        <div className="testimonial-card-text">
                            <p>{review}</p>
                        </div>
                    </div>
                </div>
            )
    })


  return (
    <div>
      <div className="special-card">
        {Testimonials}
      </div>
    </div>
  )
}

export default TestimonialsCard
