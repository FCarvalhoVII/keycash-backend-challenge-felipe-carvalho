import { getCustomRepository } from 'typeorm';
import SearchParams from '../dtos/SearchParams';
import { RealtyRepositories } from '../repositories/RealtyRepositories';

export default class SearchRealtysService {

    public static async execute(queryParams: any, page: number) {
        const limit = 10;
        const skip = limit * (page - 1);

        const realtyRepository = getCustomRepository(RealtyRepositories);

        const searchParams = new SearchParams(queryParams);

        const result = await realtyRepository.find({
            where: searchParams,
            skip,
            take: limit
        });

        return { result, limit };
    }
}