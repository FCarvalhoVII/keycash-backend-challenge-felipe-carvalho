import { Request, Response } from 'express';
import DeleteRealtyService from '../services/DeleteRealtyService';

export default class DeleteRealtyController {

    public static async handle(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await DeleteRealtyService.execute(id);

            return res.status(200).send({
                statusCode: 200,
                body: JSON.stringify({
                    message: 'Success'
                })
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