import React, { useContext } from 'react';
import './StarRating.scss'
import { AppContext } from '../../App';

interface Props {
  rating: number;
}

const StarRating = ({ rating }: Props) => {
  const stars = [];
  const maxRating = 5;
  for (let i = 0; i < maxRating; i++) {
    stars.push(
      <i
        key={i}
        className="fa fa-star"
        style={{ color: i < rating ? 'yellow' : 'lightgrey' }}
      ></i>
    );
  }
  const { handleFilter } = useContext(AppContext);
  return (
    <div className="wrapper">
      <input type="checkbox" name={rating.toString()} id={rating.toString()} onChange={(e) => handleFilter(e)} value={rating.toString()} />
      <label htmlFor={rating.toString()}>{stars}</label>
    </div>
  );
};

export default StarRating;
