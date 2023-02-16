import React from "react"
import Header from "./Header"
import Card from "./Card"
import data from "./data.js"

export default function App() {
    const cards = data.map(each => {
        return (
        <Card 
            key={each.title}
            title={each.title}
            imageUrl={each.imageUrl}
            location={each.location}
            googleMapsUrl={each.googleMapsUrl}
            startDate={each.startDate}
            endDate={each.endDate}
            description={each.description}
        /> 
        )
       
    })
    return(
        <div>
            <Header />
            {cards}
        </div>    
    )
}