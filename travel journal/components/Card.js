import React from "react"

export default function Card(props) {
    return(
        <main className="card">
            <img className="card--image" src={props.imageUrl} />
            
            <div className="text--div">
                <div className="card--location">
                    <p><i className="fa-solid fa-location-dot"></i>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                
                <h2 className="card--title">{props.title}</h2>
                <p className="card--dates">{props.startDate} - {props.endDate}</p>
                
                <p className="card--description">{props.description}</p>            
            </div>
        </main>
    )
}