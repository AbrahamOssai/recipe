import Recipe from '../models/recipe';

class RecipeController {
  createRecipe(req, res) {

    const recipe = new Recipe(req.body);

    recipe
      .save()
      .then(() => {
        res.status(201);
        res.json({
          message: 'Recipe created successfully'
        });
      })
      .catch((error) => {
        res.status(400);
        res.json({
          error: error
        });
      });
  }

  updateRecipe(req, res) {
    req.body._id = req.params.id;
    const recipe = new Recipe(req.body);

    Recipe.updateOne({ _id: req.params.id }, recipe)
      .then(() => {
        res.status(201);
        res.json({
          message: 'Recipe updated successfully'
        });
      })
      .catch((error) => {
        res.status(400);
        res.json({
          error: error
        });
      });
  }

  deleteRecipe(req, res) {
    Recipe.deleteOne({_id: req.params.id})
      .then(() => {
        res.status(200);
        res.json({
          message: 'Recipe Deleted'
        })
      })
      .catch((error) => {
        res.status(400);
        res.json({
          error: error
        });
      });
  }

  listRecipes(req, res) {
    Recipe.find()
      .then((recipes) => {
        res.status(200);
        res.json(recipes);
      })
      .catch((error) => {
        res.status(400);
        res.json({
          error: error
        });
      });
  }

  singleRecipe(req, res) {
    Recipe.findOne({
      _id: req.params.id
    })
      .then((recipe) => {
        res.status(200);
        res.json(recipe);
      })
      .catch((error) => {
        res.status(404);
        res.json({
          error: error
        });
      });
  }
}

export default new RecipeController();
