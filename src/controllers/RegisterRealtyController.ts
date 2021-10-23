import { Request, Response } from 'express';
import RegisterRealtyService from '../services/RegisterRealtyService';

export default class RegisterRealtyController {

    public static async handle(req: Request, res: Response) {
        const {
            address,
            bathroom,
            bedroom,
            city,
            neighborhood,
            parkingSpace,
            price,
            size,
            state,
            type
        } = req.body;

        try {
            const realty = await RegisterRealtyService.execute({
                address,
                bathroom,
                bedroom,
                city,
                neighborhood,
                parkingSpace,
                price,
                size,
                state,
                type
            });

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