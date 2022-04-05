import React from 'react';
import './Card.css';

type Props = {
  title: string;
  children?: React.ReactNode;
  bodyText?: string;
};
export const Card = ({ children, title, bodyText }: Props) => {
  return (
    <div className='Card'>
      <h2>{title}</h2>
      {bodyText && <p>{bodyText}</p>}
      {children}
    </div>
  );
};
