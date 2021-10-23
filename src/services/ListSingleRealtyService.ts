import { getCustomRepository } from 'typeorm';
import { RealtyRepositories } from '../repositories/RealtyRepositories';

export default class ListSingleRealtyService {

    public static async execute(id: string) {
        const realtyRepository = getCustomRepository(RealtyRepositories);

        const realty = await realtyRepository.findOne(id);

        return realty;
    }
}