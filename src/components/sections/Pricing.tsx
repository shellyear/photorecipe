// components/PricingSection.js
import React from "react";
import ChefHat from "../icons/ChefHat";
import Check from "../icons/Check";
import Cross from "../icons/Cross";
import Container from "../Container";

const basicFeatures = [
  { text: "Upload a dish photo for an instant recipe", available: true },
  {
    text: "Upload ingredient photos to generate possible recipes instantly. Type missing ingredients to complete your recipe search",
    available: true,
  },
  { text: "Manually type ingredients to find recipes", available: false },
  {
    text: "Save your favorite recipes for easy access later",
    available: false,
  },
];

const premiumFeatures = [
  { text: "Upload a dish photo for an instant recipe", available: true },
  {
    text: "Upload ingredient photos to generate possible recipes instantly. Type missing ingredients to complete your recipe search",
    available: true,
  },
  { text: "Manually type ingredients to find recipes", available: true },
  { text: "Save your favorite recipes for easy access later", available: true },
  { text: "Get access to all the upcoming features", available: true },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 pb-0">
      <Container>
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
          <div className="relative w-full">
            <div className="relative flex flex-col gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-center gap-4">
                <div>
                  <p className="text-lg lg:text-xl font-bold ">Starter</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col justify-end mb-[4px] text-lg ">
                  <p className="relative opacity-80">
                    <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[48%]"></span>
                    <span className="text-base-content">$7.99</span>
                  </p>
                </div>
                <p className="text-5xl tracking-tight font-extrabold">$3.99</p>
                <div className="flex flex-col justify-end mb-[4px]">
                  <span className="text-xs font-semibold">/month</span>
                </div>
              </div>
              <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                {basicFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {feature.available ? (
                      <Check
                        className="w-[18px] h-[18px] opacity-80 shrink-0"
                        fill="green"
                      />
                    ) : (
                      <Cross />
                    )}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-2">
                <button
                  className="btn bg-mandy group btn-block text-white hover:bg-mandydark"
                  title="Go to PhotoRecipe Checkout"
                >
                  <ChefHat w={22} h={22} />
                  Get PhotoRecipe
                </button>
                <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                  Discover and cook with ease!
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <span className="badge text-xs text-white font-semibold border-0 bg-mandy">
                POPULAR
              </span>
            </div>
            <div className="absolute -inset-[1px] rounded-[8px] bg-mandy z-10"></div>
            <div className="relative flex flex-col gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-center gap-4">
                <div>
                  <p className="text-lg lg:text-xl font-bold ">All-in</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col justify-end mb-[4px] text-lg ">
                  <p className="relative opacity-80">
                    <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[48%]"></span>
                    <span className="text-base-content">$49.99</span>
                  </p>
                </div>
                <p className="text-5xl tracking-tight font-extrabold">$39.99</p>
                <div className="flex flex-col justify-end mb-[4px]">
                  <span className="text-xs font-semibold">/year</span>
                </div>
              </div>
              <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                {premiumFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {feature.available ? (
                      <Check
                        className="w-[18px] h-[18px] opacity-80 shrink-0"
                        fill="green"
                      />
                    ) : (
                      <Cross />
                    )}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-2">
                <button
                  className="btn bg-mandy group btn-block text-white hover:bg-mandydark"
                  title="Go to PhotoRecipe Checkout"
                >
                  <ChefHat w={22} h={22} />
                  Get PhotoRecipe
                </button>
                <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                  Cook like a pro with our Premium Plan!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
