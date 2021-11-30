import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Card from "./Card";
export default function Data(props) {
  const settings = {
    speed: 500,
    slideToShow: 1,
    mobileFirst: true,
    slidesPerRow: 6,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesPerRow: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesPerRow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="container my-4">
        <h3>{props.heading}</h3>
      </div>
      <Slider {...settings}>
        {props.data.map((d, index) => (
          <Link
            target="_blank"
            key={index}
            to={`/details/${
              props.type === undefined || null
                ? d.type === "TV"
                  ? "anime"
                  : d.type.toLowerCase()
                : props.type
            }/${d.mal_id}/`}
          >
            <div key={index}>
              <Card
                image_url={d.image_url}
                title={d.title}
                type={d.type}
                start_date={d.start_date}
              />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
