import { getCustomRepository } from 'typeorm';
import { RealtyRepositories } from '../repositories/RealtyRepositories';

export default class DeleteRealtyService {

    public static async execute(id: string) {
        const realtyRepository = getCustomRepository(RealtyRepositories);

        const realty = await realtyRepository.delete(id);

        return realty;
    }
}