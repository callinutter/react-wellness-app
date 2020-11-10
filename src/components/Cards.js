import React from 'react'
import CardItem from './CardItem'
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Recent Posts</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                   <ul className="cards__items">
                      <CardItem 
                        src="images/yoga-2.jpg"
                        text="Refreshing 30 minute morning yoga sequence"
                        label= "Yoga"
                        path="/yoga"
                      /> 
                      <CardItem 
                        src="images/breath-1.jpg"
                        text="Mindful breathing exercise to reduce anxiety"
                        label= "Breathwork"
                        path="/yoga"
                      /> 
                   </ul>
                   <ul className="cards__items">
                      <CardItem 
                        src="images/yoga-3.jpg"
                        text="60 minute mobility workshop"
                        label= "Yoga"
                        path="/yoga"
                      /> 
                      <CardItem 
                        src="images/food-1.jpg"
                        text="Foods that lower inflammation"
                        label= "Nutrition"
                        path="/nutrition"
                      /> 
                      <CardItem 
                        src="images/plants-1.jpg"
                        text="How to keep your plants alive"
                        label= "Plants"
                        path="/plant-blog"
                      /> 
                   </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
