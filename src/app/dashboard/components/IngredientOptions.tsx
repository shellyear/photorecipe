import ArrowDown from "@/components/icons/ArrowDown";
import { Dispatch, SetStateAction, useState } from "react";

interface IngredientOptionsProps {
  skillLevel: SkillLevel;
  timeConstraint: TimeConstraint;
  dietaryRestrictions: string[];
  missingIngredients: string;
  setSkillLevel: Dispatch<SetStateAction<SkillLevel>>;
  setTimeConstraint: Dispatch<SetStateAction<TimeConstraint>>;
  setDietaryRestrictions: Dispatch<SetStateAction<string[]>>;
  setMissingIngredients: Dispatch<SetStateAction<string>>;
}

export enum TimeConstraint {
  HALF_HOUR = "30 minutes or less",
  HOUR = "1 hour or less",
  HOUR_AND_HALF = "1,5 hours or less",
  ANY = "any time",
}

export enum SkillLevel {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced",
}

const dietaryRestrictionOptions = [
  "Vegetarian",
  "Vegan",
  "Gluten-free",
  "Dairy-free",
  "Halal",
];

export function useIngredientOptions() {
  const [skillLevel, setSkillLevel] = useState(SkillLevel.BEGINNER);
  const [timeConstraint, setTimeConstraint] = useState(
    TimeConstraint.HALF_HOUR
  );
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([]);
  const [missingIngredients, setMissingIngredients] = useState("");

  return {
    skillLevel,
    timeConstraint,
    dietaryRestrictions,
    missingIngredients,
    setSkillLevel,
    setTimeConstraint,
    setDietaryRestrictions,
    setMissingIngredients,
  };
}

export default function IngredientsOptions({
  skillLevel,
  timeConstraint,
  dietaryRestrictions,
  missingIngredients,
  setMissingIngredients,
  setSkillLevel,
  setTimeConstraint,
  setDietaryRestrictions,
}: IngredientOptionsProps) {
  const handleDietaryChange = (restriction: string) => {
    setDietaryRestrictions((prev) =>
      prev.includes(restriction)
        ? prev.filter((r) => r !== restriction)
        : [...prev, restriction]
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-8">
      <h2 className="text-3xl font-bold mb-6">Cooking Preferences</h2>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="flex-1">
          <label
            htmlFor="skill-level"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Cooking Skill Level
          </label>
          <div className="relative">
            <select
              id="skill-level"
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={skillLevel}
              onChange={(e) => setSkillLevel(e.target.value as SkillLevel)}
            >
              <option value={SkillLevel.BEGINNER}>Beginner</option>
              <option value={SkillLevel.INTERMEDIATE}>Intermediate</option>
              <option value={SkillLevel.ADVANCED}>Advanced</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ArrowDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Dietary Restrictions
          </span>
          <div className="flex flex-wrap gap-2">
            {dietaryRestrictionOptions.map((restriction) => (
              <label key={restriction} className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                  checked={dietaryRestrictions.includes(restriction)}
                  onChange={() => handleDietaryChange(restriction)}
                />
                <span className="ml-2 text-sm text-gray-700">
                  {restriction}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <label
            htmlFor="time-constraint"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Time Constraint
          </label>
          <div className="relative">
            <select
              id="time-constraint"
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={timeConstraint}
              onChange={(e) =>
                setTimeConstraint(e.target.value as TimeConstraint)
              }
            >
              <option value={TimeConstraint.HALF_HOUR}>
                {TimeConstraint.HALF_HOUR}
              </option>
              <option value={TimeConstraint.HOUR}>{TimeConstraint.HOUR}</option>
              <option value={TimeConstraint.HOUR_AND_HALF}>
                {TimeConstraint.HOUR_AND_HALF}
              </option>
              <option value={TimeConstraint.ANY}>{TimeConstraint.ANY}</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ArrowDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 mt-4">
        <label
          htmlFor="missing-ingredient"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Missing Ingredients
        </label>
        <input
          type="text"
          id="missing-ingredient"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Type missing ingredients here"
          maxLength={70}
          value={missingIngredients}
          onChange={(e) => setMissingIngredients(e.target.value)}
        />
      </div>

      <div className="mt-8 p-6 bg-gray-100 rounded-md">
        <h3 className="text-xl font-semibold mb-4">Selected Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <p>
            <strong>Skill Level:</strong> {skillLevel}
          </p>
          <p>
            <strong>Dietary Restrictions:</strong>{" "}
            {dietaryRestrictions.join(", ") || "None"}
          </p>
          <p>
            <strong>Time Constraint:</strong> {timeConstraint}
          </p>
        </div>
      </div>
    </div>
  );
}
