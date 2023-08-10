import React from 'react'
import "../components/styles/SpecialsCard.css"
import Dish1 from "../components/assets/greeksalad.png"
import Dish2 from "../components/assets/bruschetta.jpg"
import Dish3 from "../components/assets/lemondessert.jpeg"
import { NavLink } from 'react-router-dom'

const SpecialsCard = () => {
    const specialMenus = [
        {   
            image: Dish1,
            title: "Greek Salad",
            price: "$12.99",
            description: "Our famous Greek salad is made with pieces of tomatoes, sliced cucumbers, onion, feta cheese, and olives, seasoned with salt and Greek mountain oregano, and dressed with olive oil.",
            order: "Add to cart"
        },
        {
            image: Dish2,
            title: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made of bread brushed with olive oil and toasted dark on the grill, then topped with our fresh bruschetta sauce of diced plum tomatoes, garlic, onions, and basil.",
            order: "Add to cart"
        },
        {
            image: Dish3,
            title: "Lemon Dessert",
            price: "$5.00",
            description: "Our Lemon Dessert is just the right amount of sweet from our secret family recipe. Dense and flavourful, this is our best seller that will have you coming back for more!",
            order: "Add to cart"
        }
    ]

    const specialMenusItems = specialMenus.map(menu => {
            const image = menu.image;
            const title = menu.title;
            const price = menu.price;
            const description = menu.description;
            const order = menu.order;
            
            return (
                <div>
                    <div className="special-card-container">
                        <div className="image-container">
                                <img src={image} alt="Special dessert" />
                            </div>
                        <div className="special-card-text">
                            <div className="special-card-title">
                                <h3>{title}</h3>
                                <h3 className="price-tag">{price}</h3>
                            </div>
                            <p>{description}</p>
                            <NavLink to="#">
                                <button className='btn-delivery'>{order}</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
    })


  return (
    <div>
      <div className="special-card">
        {specialMenusItems}
      </div>
    </div>
  )
}

export default SpecialsCard
