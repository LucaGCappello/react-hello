import React from 'react';

const Card = ({ imageUrl, title, text, link }) => {
    return (
        <div className="card" style={{ width: "14rem" }}>
            <img src={imageUrl} className="card-img-top" alt="Card" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={link} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Card;