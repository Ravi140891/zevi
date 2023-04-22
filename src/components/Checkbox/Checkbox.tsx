import React from 'react'
import './Checkbox.scss'

interface CheckboxProps {
  label: string;
  name: string;
}


const Checkbox = ({label,name}: CheckboxProps) => {
  return (
    <div className="check">
            <input type="checkbox" name={name} id={label}/>
            <label htmlFor={label}>{name}</label>
            </div>
  )
}

export default Checkbox