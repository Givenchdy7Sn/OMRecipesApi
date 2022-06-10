import httpStatus from 'http-status';
import { RecipeService } from '../service/RecipeService';

export const createRecipe = ((req: any, res: any) => {

    const data = req.body;

    if (!data.title) {

        res.status(httpStatus.BAD_REQUEST);
        return res.json({
            message: 'Please provide all the required details'
        });
        
    }

    var service = new RecipeService();

    service.createRecipe(data, (response: any) => {
       res.status(response.status);
        res.json({
            "message": response.message,
        });
   });

});
