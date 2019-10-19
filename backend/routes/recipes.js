import { Router } from 'express';
import recipe from '../controllers/recipe';

const router = Router();

router.get('/', recipe.listRecipes );
router.post('/', recipe.createRecipe);
router.get('/:id', recipe.singleRecipe)
router.put('/:id', recipe.updateRecipe);
router.delete('/:id', recipe.deleteRecipe);

export default router;