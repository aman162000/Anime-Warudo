import React from "react";

export default function Card(props) {
  return (
    <div className="custom-card">
      <img src={props.image_url} className="custom-card-image" alt="..." />
      <div className="custom-card--content">
        <div className="custom-card--content--title">{props.title}</div>
        <button className="custom-card--content--details">DETAILS</button>
        <div className="custom-card--content--footer">
          <div>{props.type}</div>
          <div>{props.start_date}</div>
        </div>
      </div>
    </div>
  );
}
