import Image from "next/image";
import Container from "../Container";
import ChefHat from "../icons/chefHat";

const Introduction = () => {
  return (
    <section className="py-8">
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 w-full md:pr-8">
            <h1 className="text-5xl font-bold leading-normal">
              Get Recipes from Food Photos{" "}
              <span className="relative whitespace-nowrap">
                <span className="absolute bg-neutral-content -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
                <span className="relative text-mandy">Instantly</span>
              </span>
            </h1>
            <p className="mt-4 px-3 text-lg">
              Snap a photo of ingredients or a meal, and get instant recipe
              recommendations or dish identification with our AI-powered app.
            </p>
            <button className="btn bg-mandy btn-wide text-white font-bold mt-4 hover:bg-mandydark">
              <ChefHat w={22} h={22} />
              Get started
            </button>
          </div>
          <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0">
            <Image
              src="/title-photo.png"
              alt="main image"
              width={350}
              height={350}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Introduction;
