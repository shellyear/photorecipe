import React from "react";

interface Icon {
  w?: number;
  h?: number;
  fill?: string;
  className?: string;
}

const ArrowDown = ({ w, h, fill, className }: Icon) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 1024 1024"
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowDown;
