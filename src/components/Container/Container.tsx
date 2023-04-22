import React, { ReactNode } from 'react';
import './Container.scss'

interface ContainerProps {
  title: string;
  children: ReactNode;
}

const Container = ({ title, children }: ContainerProps) => {
  return (
    <div className="container">
      <div className="title">
        <h3>{title}</h3>
        <i className="fa fa-angle-down"></i>
      </div>
      {children}
    </div>
  )
}

export default Container;
