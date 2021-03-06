import httpStatus from 'http-status';
import { RecipeService } from '../service/RecipeService';

export const fetchRecipe = ((req: any, res: any) => {

    const data = req.params;

    if (!data.id) {

        res.status(httpStatus.BAD_REQUEST);
        return res.json({
            message: 'Please provide all the required details'
        });
    }

    var service = new RecipeService();

    service.fetchRecipe(data.id, (data: any, extraInfo: any) => {

        res.status(extraInfo.status);
        res.json({
            data: data,
            message: extraInfo.message
        });

    });


});