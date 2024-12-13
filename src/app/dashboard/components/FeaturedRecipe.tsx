"use client";
import { useState } from "react";
import React from "react";
import { RecipeData } from "@/types/recipe";
import Image from "next/image";
import ArrowUp from "@/components/icons/ArrowUp";
import ArrowDown from "@/components/icons/ArrowDown";
import Container from "@/components/Container";

interface FeaturedRecipeProps {
  recipeData: RecipeData;
  image?: File;
}

const FeaturedRecipe = ({ recipeData, image }: FeaturedRecipeProps) => {
  const [isRecipeExpanded, setIsRecipeExpanded] = useState(false);
  const toggleRecipeExpansion = () => {
    setIsRecipeExpanded(!isRecipeExpanded);
  };

  return (
    <div className="mt-10 jumping-button jumping-button:hover">
      <Container>
        <button
          onClick={toggleRecipeExpansion}
          className="w-full flex justify-between items-center px-4 py-2 text-left text-lg font-medium text-white bg-mandy hover:bg-mandydark focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50 rounded"
        >
          <span>Featured Recipe: {recipeData.name}</span>
          {isRecipeExpanded ? (
            <ArrowUp className="h-5 w-5" fill="white" />
          ) : (
            <ArrowDown className="h-5 w-5" fill="white" />
          )}
        </button>
        {isRecipeExpanded && (
          <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  {image && (
                    <Image
                      src={URL.createObjectURL(image)}
                      alt={recipeData.name}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Ingredients:</h4>
                  <ul className="list-disc list-inside mb-4">
                    {recipeData.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold mb-2">Instructions:</h4>
                  <ol className="list-decimal list-inside">
                    {recipeData.instructions.map((instruction, i) => (
                      <li key={i}>{instruction}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default FeaturedRecipe;
