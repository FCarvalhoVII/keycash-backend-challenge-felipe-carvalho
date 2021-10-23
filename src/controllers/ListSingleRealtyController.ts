import { Request, Response } from 'express';
import ListSingleRealtyService from '../services/ListSingleRealtyService';

export default class ListSingleRealtyController {

    public static async handle(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const realty = await ListSingleRealtyService.execute(id);

            return res.status(200).send({
                statusCode: 200,
                body: realty
            });

        } catch(err) {
            console.error('ERROR: ', err);
            return res.status(500).send({
                statusCode: 500,
                body: JSON.stringify({
                    message: 'Unexpected Error'
                })
            });
        }
    }
}