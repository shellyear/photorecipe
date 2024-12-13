import {
  SkillLevel,
  TimeConstraint,
} from "@/app/dashboard/components/IngredientOptions";
import Config from "../config";
import { RecipeChoice } from "@/types/enum";

interface IGetRecipeParams {
  image: File;
  recipeChoice: RecipeChoice;
  skillLevel: SkillLevel;
  timeConstraint: TimeConstraint;
  dietaryRestrictions: string[];
  missingIngredients: string;
}

export async function getRecipe({
  image,
  recipeChoice,
  skillLevel,
  timeConstraint,
  dietaryRestrictions,
  missingIngredients,
}: IGetRecipeParams) {
  try {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("recipeChoice", recipeChoice);
    formData.append("skillLevel", skillLevel);
    formData.append("timeConstraint", timeConstraint);
    formData.append("dietaryRestrictions", JSON.stringify(dietaryRestrictions));
    formData.append("missingIngredients", missingIngredients);

    /* Headers are automatically specified by browser for the multipart/form-data */
    const res = await fetch(`${Config.BACKEND_BASE_URL}/api/recipe`, {
      method: "POST",
      credentials: "include",
      body: formData,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error while fetching recipe" + error);
    throw error;
  }
}
