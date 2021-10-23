import { getCustomRepository } from 'typeorm';
import { RealtyRepositories } from '../repositories/RealtyRepositories';
import RealtyTypeEnum from '../enums/RealtyType';

interface IRealtyRequest {
    price: number;
    type: RealtyTypeEnum;
    size: number;
    parkingSpace: number;
    bedroom: number;
    bathroom: number;
    city: string;
    state: string;
    neighborhood: string;
    address: string;
}

export default class RegisterRealtyService {

    public static async execute({
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
    }: IRealtyRequest) {
        
        const realtyRepository = getCustomRepository(RealtyRepositories);

        if (!Object.values(RealtyTypeEnum).includes(type)) {
            throw new Error('The type must be \'house\' or \'apartment\'');
        }

        const realty = realtyRepository.create({
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

        await realtyRepository.save(realty);

        return realty;
    }
}