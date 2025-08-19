import React from 'react';
import { twMerge } from 'tailwind-merge';

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={twMerge(
        'bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;