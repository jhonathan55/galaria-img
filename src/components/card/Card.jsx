import React from "react";
import "./Card.css";
const Card = ({ imageUrl, title, description }) => {
    return (
        <>
            <div className="card">
                <img src={imageUrl} alt={title} />
                <div className="card-body">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>

            <div className="card m-5">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </>
    )
}
export default Card;