import { Request, Response } from 'express';
import SearchRealtysService from '../services/SearchRealtysService';

export default class SearchRealtysController {

    public static async handle(req: Request, res: Response) {
        try {
            const page = Number(req.query.page);

            const search = await SearchRealtysService.execute(req.query, page || 1);

            return res.status(200).send({
                statusCode: 200,
                body: search.result,
                pageNumber: page || 1,
                pageSize: search.limit
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