import * as express from 'express';
import { createRecipe } from './src/controller/createRecipe';
import { fetchRecipe } from './src/controller/fetchRecipe';
import { fetchRecipesCollection } from './src/controller/fetchRecipesCollection';

export const router = express.Router()

router.post('/', createRecipe);

router.get('/collection', fetchRecipesCollection) ;

router.get('/:id', fetchRecipe);

