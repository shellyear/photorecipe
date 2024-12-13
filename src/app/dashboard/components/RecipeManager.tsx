"use client";
import React, { useState } from "react";
import { RecipeData } from "@/types/recipe";
import FeaturedRecipe from "./FeaturedRecipe";
import FileUpload from "./FileUpload";

const RecipeManager = () => {
  const [image, setImage] = useState<File | undefined>();
  const [recipeData, setRecipeData] = useState<RecipeData | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <FileUpload
        image={image}
        setImage={setImage}
        setRecipeData={setRecipeData}
        loading={loading}
        setLoading={setLoading}
      />
      {loading && (
        <div className="mt-10 flex justify-center">
          <span className="loading loading-ball loading-lg" />
        </div>
      )}
      {recipeData && image && (
        <FeaturedRecipe image={image} recipeData={recipeData} />
      )}
    </>
  );
};

export default RecipeManager;
