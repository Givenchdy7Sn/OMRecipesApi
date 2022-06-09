import httpStatus from 'http-status';
import { RecipeService } from '../service/RecipeService';

export const fetchRecipe = ((req, res) => {

    const data = req.params;
    console.log('fetch recipe', data);

    if (!data.id) {

        res.status(httpStatus.BAD_REQUEST);
        return res.json({
            message: 'Please provide all the required details'
        });
    }

    var service = new RecipeService();

    service.fetchRecipe(data.id, (data, extraInfo) => {

        res.status(extraInfo.status);
        res.json({
            data: data,
            message: extraInfo.message
        });

    });


});