import { EntityRepository, Repository } from 'typeorm';
import { Realty } from '../entities/Realty';

@EntityRepository(Realty)
class RealtyRepositories extends Repository<Realty> {};

export { RealtyRepositories };