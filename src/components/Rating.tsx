import Star from "./icons/Star";

const Rating = () => {
  return (
    <div className="rating !flex justify-center">
      <Star className="w-5 h-5 text-yellow-500" />
      <Star className="w-5 h-5 text-yellow-500" />
      <Star className="w-5 h-5 text-yellow-500" />
      <Star className="w-5 h-5 text-yellow-500" />
      <Star className="w-5 h-5 text-yellow-500" />
    </div>
  );
};

export default Rating;
