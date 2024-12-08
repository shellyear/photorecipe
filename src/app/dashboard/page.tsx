import Container from "@/components/Container";
import RecipeManager from "./components/RecipeManager";

const Dashboard = () => {
  return (
    <section className="py-8">
      <Container>
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center">
            <h1 className="text-5xl font-bold leading-normal">
              Free Recipes from Food Photos{" "}
              <span className="relative whitespace-nowrap">
                <span className="absolute bg-neutral-content -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
                <span className="relative text-mandy">Instantly</span>
              </span>
            </h1>
            <p className="mt-4 px-3 text-lg text-gray-600">
              Upload a photo of a dish or ingredients, and we&apos;ll provide
              you with a delicious recipe to try!
            </p>
          </div>
        </div>
        <RecipeManager />
      </Container>
    </section>
  );
};

export default Dashboard;
