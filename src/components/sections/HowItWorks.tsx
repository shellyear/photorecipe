import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="py-8 text-center">
        <h2 className="text-4xl font-bold mb-8">It's easy as 1, 2, 3</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1: Login or Signup */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-1">
              <Image src="/signup.svg" width={60} height={60} alt="signup" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Login or Sign Up</h3>
            <p className="text-gray-600">
              Create an account or log in to get started. Sign up easily using
              your email or social accounts.
            </p>
          </div>

          {/* Step 2: Take a Photo of Your Meal */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-1">
              <Image src="/camera-icon.svg" width={60} height={60} alt="signup" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Upload a Photo</h3>
            <p className="text-gray-600">
              Capture a picture of your meal. Our system will analyze the photo
              and identify the dish.
            </p>
          </div>

          {/* Step 3: Get Meal Name and Recipe */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-1">
              <Image src="/recipe.svg" width={60} height={60} alt="signup" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Get Meal Recipe</h3>
            <p className="text-gray-600">
              Receive the name of the dish and a detailed recipe so you can
              recreate it at home.
            </p>
          </div>
        </div>
    </section>
  );
};

export default HowItWorks;
