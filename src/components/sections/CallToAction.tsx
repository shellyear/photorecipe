import Image from "next/image";
import ChefHat from "../icons/ChefHat";

const CallToAction = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/food-expert.jpeg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />{" "}
      {/* Optional overlay for better text visibility */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
        <div>
          <h2 className="mb-4 text-2xl font-bold sm:text-5xl md:text-6xl">
            Snap, Cook, Enjoy! <br></br> Start Your Culinary Journey Today!
          </h2>
          <button className="btn bg-mandy btn-wide text-white font-bold mt-4 hover:bg-mandydark">
            <ChefHat w={22} h={22} />
            Get PhotoRecipe
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
