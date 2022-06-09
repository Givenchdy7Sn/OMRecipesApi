import httpStatus from 'http-status';

const { 
  createConnection
 } = require("typeorm");

 import { 
   getManager
 } from "typeorm";

import {
  Ingredient 
} from '../entity/Ingredient';

import { 
  Recipe 
} from '../entity/Recipe';

import {
   RecipeStep
} from '../entity/RecipeStep';

 export class RecipeService {

    constructor(){}

    async fetchCollection(onCallback: any) {

      const recipeRepository = getManager().getRepository(Recipe);

      var res = await recipeRepository.find();

      onCallback(res, {
        message: "Recipe data fetched successfully",
        status: httpStatus.OK
      });

    }

    async fetchRecipe(id: any, onCallback: any) {

      const recipeRepository = getManager().getRepository(Recipe);
      const ingredientsRepository = getManager().getRepository(Ingredient);
      const stepsRepository = getManager().getRepository(RecipeStep);

      var res = await recipeRepository.findOneBy({
        id
      });

      var ingredientsData = await ingredientsRepository.findBy({
        recipeId: id
      });

      var stepsData = await stepsRepository.findBy({
        recipeId: id
      });

      res.ingredients = ingredientsData;
      res.steps = stepsData;

      onCallback(res, {
        message: "Recipe fetched successfully",
        status: httpStatus.OK
      });
    }

    async createRecipe(data: any, onCallback: any) {

        var today = new Date();

        var recipe = new Recipe();
        recipe.title = data.title;
        recipe.mealType = data.mealType;
        recipe.peopleServed = data.peopleServed;
        recipe.difficultyLevel = data.difficultyLevel;
        recipe.createdDate = today.getFullYear() + '/' + today.getMonth() + '/' + today.getDay();
        recipe.createdTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const ingredients = data.ingredients;
        const recipeSteps = data.steps;

        const recipeRepository = getManager().getRepository(Recipe);
        var res = await recipeRepository.save(recipe);

        if (res.id) {

         const ingredientRepository = getManager().getRepository(Ingredient);

         for (let item of ingredients) {

          var ingredient = new Ingredient();
          ingredient.amount = item.amount;
          ingredient.recipeId = res.id;
          ingredient.title = item.title;
          ingredient.unit = item.unit;
          await ingredientRepository.save(ingredient);
         }

         const stepRepository = getManager().getRepository(RecipeStep);

         for (let item of recipeSteps) {

          var step = new RecipeStep();
          step.description = item.description;
          step.stepNumber = item.stepNumber;
          step.recipeId = res.id;
          await stepRepository.save(step);
         }
          
         return onCallback({
           status: httpStatus.CREATED,
           message: "Recipe created succesfully"
         });
        }

        return onCallback({
          status: httpStatus.INTERNAL_SERVER_ERROR,
          message: "failed to save a new recipe"
        });

    }
}