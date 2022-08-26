import React from "react";
import CarouselFade from "../static elements/Carousel.jsx";

// * stylesheet
import "../../styles/pages/Homepage.css";

const Home = () => {
  return (
    <div className="homepage-wrapper">
      <div className="carousel-container shadow-box grid-row-span-2">
        <CarouselFade />
      </div>
      <div className="build-details shadow-box">
        <h3 className="text-align-center grid-col-span-2 headline-type-title">
          OVERVIEW
        </h3>
        <p className="overview-statement grid-col-span-2">
          <h5 className="headline-type-subtitle">Where to Start</h5>
          Do you need a value Gaming Build within the budget you set, but dont
          really know where to begin? Even if your budget is as low as $200, I
          will work hard to find you the best parts within that range and
          assemble them for you. You get final say on what you get, as I will
          work with you from start to finish to build your dream budget build.
          From plain to flashy, it’s your choice on what you want, and it comes
          with the Ann Hiro guarantee that I will put as much care into your
          build as I would my own.
        </p>
        <p className="details-statement grid-col-span-2">
          <h5 className="headline-type-subtitle">Configuration</h5>
          Once we've settled on a price range, we'll go over any specifics for
          the components on the list below, and if you have any preferences with
          them.
        </p>
        <ul className="parts-list-left">
          <li>
            <span className="part-number">CPU & Cooler</span>
          </li>
          <li>
            <span className="part-number">GPU</span>
          </li>
          <li>
            <span className="part-number">Motherboard</span>
          </li>
          <li>
            <span className="part-number">RAM</span>
          </li>
        </ul>
        <ul className="parts-list-center">
          <li>
            <span className="part-number">Storage Drives</span>
          </li>
          <li>
            <span className="part-number">Power Supply</span>
          </li>
          <li>
            <span className="part-number">Case</span>
          </li>
          <li>
            <span className="part-number">Fans [optional]</span>
          </li>
        </ul>
        {/* <ul className="parts-list-right"></ul> */}
      </div>
      <div className="price-guide shadow-box">
        <h3 className="text-align-center headline-type-title">PRICING</h3>
        <p className="pricing-statement">
          <h5 className="headline-type-subtitle">How I work</h5>
          Once your budget has been established, we will discuss if used and, or
          refurbished PC components are an option, for even greater value, and I
          will do extensive testing to ensure the parts will stand up to the
          task. Updates on your machine can be requested at any time, and I will
          be happy to keep you updated at regular intervals as well, simply let
          me know how in the know you want to be.
        </p>
        <p className="additional-costs">
          <h5 className="headline-type-subtitle">Additional Costs</h5>
          <ul className="cost-list">
            <li className="cost-list-item">
              <span>
                $50 Shipping | includes the cost of packaging materials
              </span>
            </li>
            <li className="cost-list-item">
              <span>$100 Build Fee | includes cable management and setup</span>
            </li>
            <li className="cost-list-item">
              <span>$45 Activate Windows [Optional]&nbsp</span>
              <span className="font-type-italic">
                Unactivated Windows has no performance loss
              </span>
            </li>
          </ul>
        </p>
        <p className="resolution-statement">
          <h5 className="headline-type-subtitle">My Promise</h5>
          My goal is to provide affordable computers to those who want or need
          them. From anything from gaming to productivity. I will use my
          knowledge of both the market, and the hardware to get you the best
          deal.
        </p>
      </div>
    </div>
  );
};

export default Home;
