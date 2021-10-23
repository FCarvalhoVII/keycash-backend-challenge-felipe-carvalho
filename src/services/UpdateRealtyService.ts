import { getCustomRepository } from 'typeorm';
import UpdateObject from '../dtos/UpdateObject';
import RealtyTypeEnum from '../enums/RealtyType';
import { RealtyRepositories } from '../repositories/RealtyRepositories';

export default class UpdateRealtyService {

    public static async execute(requestBody: any, id: string) {

        const realtyRepository = getCustomRepository(RealtyRepositories);

        if (requestBody.type) {
            if (!Object.values(RealtyTypeEnum).includes(requestBody.type)) {
                throw new Error('The type must be \'house\' or \'apartment\'');
            }
        }

        const updateObject = new UpdateObject(requestBody);

        await realtyRepository.update(id, updateObject);

        const realty = await realtyRepository.findOne(id);

        return realty;
    }
}