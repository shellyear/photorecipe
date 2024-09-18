interface Icon {
  w?: number;
  h?: number;
  fill?: string;
  className?: string;
}

const ArrowUp = ({ w, h, fill, className }: Icon) => {
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
        d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z"
        fill="#000000"
      />
    </svg>
  );
};

export default ArrowUp;
