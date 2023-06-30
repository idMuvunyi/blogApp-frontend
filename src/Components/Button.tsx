import React, { FC } from 'react';

export type ButtonProps = {
  styles?: String;
  icon?: String;
  title: String;
  onPress: () => void;
};

const Button: FC<ButtonProps> = ({ styles, icon, title, onPress }) => {
  return (
    <button
      className="bg-blue-200 font-bold py-1 px-4 inline-flex items-center hover:text-white"
      onClick={onPress}
    >
      <svg
        className="w-5 h-5 mr-5 text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 5H1m0 0 4 4M1 5l4-4"
        />
      </svg>

      <span className=" text-white hover:text-gray-50 text-xs">{title}</span>
    </button>
  );
};

export default Button;
