import React from "react";
import Slider from "react-animated-slider";
// import "react-animated-slider/build/vertical.css";
import "react-animated-slider/build/horizontal.css";

const content = [
  {
    // title: "Homekins Design",
    // description: "With precision",
    // button: "More Detail",
    link: "/#",
    image:
      "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    // title: "Interior Expertise",
    // description: "Stylish living",
    // button: "More Detail",
    link: "/#",
    image:
      "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    // title: "Land of Residence",
    // description: "According lifestyle",
    // button: "More Detail",
    link: "/#",
    image:
      "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
];

export default () => (
  <>
    <Slider
      className="slider-wrapper"
      autoplay={2000}
      pauseOnHover={false}
      infinite={true}
      disabled={false}
    >
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            {/* <button onClick={() => window.open(item.link, "_self")}>
            <span className="shine"></span>
            <span>{item.button}</span>
          </button> */}
          </div>
        </div>
      ))}
    </Slider>
  </>
);
