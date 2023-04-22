import React, { useContext } from 'react';
import './Checkbox.scss';
import { AppContext } from '../../App';

interface CheckboxProps {
  label: string;
  name: string;
}

const Checkbox = ({ label, name }: CheckboxProps) => {
  const { handleFilter } = useContext(AppContext);


  return (
    <div className="check">
      <input type="checkbox" name={name} id={label} onChange={(e) => handleFilter(e)} value={name}/>
      <label htmlFor={label}>{name}</label>
    </div>
  );
};

export default Checkbox;
