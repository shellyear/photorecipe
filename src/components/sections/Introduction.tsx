import Image from "next/image";

const Introduction = () => {
  return (
    <div>
      <div className="container mx-max-w-screen-lg mx-auto p-4">
        <h1 className="text-5xl font-bold leading-normal">
          Get Recipes from Food Photos{" "}
          <span className="relative whitespace-nowrap">
            <span className="absolute bg-neutral-content -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
            <span className="relative text-neutral">Instantly</span>
          </span>
        </h1>
        <p className="mt-4 px-3 text-lg">
          Snap a photo of ingredients or a meal, and get instant recipe
          recommendations or dish identification with our AI-powered app.
        </p>
      </div>
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute transform -rotate-12 left-1/3 bottom-1/2">
          <Image
            src="/food-on-table.jpg"
            alt="food on table"
            width={300}
            height={300}
            className="w-60 h-60 object-cover"
          />
        </div>
        <div className="absolute transform rotate-12 right-1/3 bottom-1/2">
          <Image
            src="/dish.jpg"
            alt="dish"
            width={300}
            height={300}
            className="w-60 h-60 object-cover"
          />
        </div>
        <div className="relative mt-22">
          <Image
            src="/transparent-camera.png"
            alt="camera"
            width={150}
            height={150}
            className="w-150 h-150 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
