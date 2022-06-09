import httpStatus from 'http-status';
import { RecipeService } from '../service/RecipeService';

export const fetchRecipesCollection = ((req: any, res: any) => {

    const data = req.params;

    var service = new RecipeService();

    service.fetchCollection((data, extraInfo) => {

        res.status(extraInfo.status);
        res.json({
            data: data,
            message: extraInfo.message
        });
    });

});