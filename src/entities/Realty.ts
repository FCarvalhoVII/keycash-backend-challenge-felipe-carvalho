import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('realtys')
class Realty {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    price: number;

    @Column()
    type: string;

    @Column()
    size: number;

    @Column()
    parkingSpace: number;

    @Column()
    bedroom: number;

    @Column()
    bathroom: number;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    neighborhood: string;

    @Column()
    address: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export { Realty };