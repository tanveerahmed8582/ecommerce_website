import React from "react";
import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt=""
            height="600px"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" height="30px" />
          <img src={star_icon} alt="" height="30px" />
          <img src={star_icon} alt="" height="30px" />
          <img src={star_icon} alt="" height="30px" />
          <img src={star_dull_icon} alt="" height="30px" />
          <p>(130)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          perferendis amet vel at alias ipsa aliquid, quidem maxime. Quia sequi
          labore quidem repellat quisquam vitae quo! Cumque odio eaque facilis?
        </div>
        <div className="productdisplay-right-sizes">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button className="productdisplay-right-button">ADD TO CART</button>
        <div className="productdisplay-right-category">
          <span>
            Category: <span>Women, T-Shirt, Crop Top</span>
          </span>
        </div>
        <div className="productdisplay-right-Tags">
          <span>
            Tags: <span>Modern, Latest, Trend Shorts</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
