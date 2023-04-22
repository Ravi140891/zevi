import React from 'react';
import './Products.scss';

interface Props {
  name: string;
  image: string;
  price: number;
  rating: number;
  brand: string;
  wishlist: boolean;
  discountedPrice?: number;
  handleWishlistClick: (index: number) => void;
  index: number;
}

const Products: React.FC<Props> = ({
  name,
  image,
  price,
  rating,
  brand,
  wishlist,
  discountedPrice,
  handleWishlistClick,
  index,
}) => {
  const maxRating = 5;
  const yellowStars = rating > 0 ? rating : 0;
  const emptyStars = maxRating - yellowStars;

  return (
    <div className='products'>
      <div className="img">
        <img src={image} alt='' />
        <button onClick={() => handleWishlistClick(index)}>
          <i className="fa fa-heart" style={{fontSize:"40px",color:wishlist ? 'red' : 'white'}}></i>
        </button> 
        <div className="view-product"><p>View Product</p></div>
      </div>
      <h5>{brand}</h5>
      <h6>{name}</h6>
      <p>
        <span className='price'>Rs. {price}</span>{' '}
        <span className='discount'>Rs. {discountedPrice}</span>
      </p>
      <div className='rating'>
        {[...Array(yellowStars)].map((_, index) => (
          <i
            key={index}
            className='fa fa-star'
            style={{ color: 'yellow' }}
          ></i>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <i key={index} className='fa fa-star'
          style={{ color: 'lightgrey'}}
          ></i>
        ))} <span>(210)</span>
      </div>
    </div>
  );
};

export default Products;
