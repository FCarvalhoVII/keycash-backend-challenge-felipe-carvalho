import RealtyTypeEnum from '../enums/RealtyType';

export default class UpdateObject {

    public type?: RealtyTypeEnum;

    public price?: number;

    public bedroom?: number;

    public bathroom?: number;

    public parkingSpace?: number;

    public size?: number;

    public state?: string;

    public city?: string;

    public neighborhood?: string;

    public address?: string;

    public constructor(init: any) {
        const {
            type,
            price,
            bedroom,
            bathroom,
            parkingSpace,
            size,
            state,
            city,
            neighborhood,
            address
        } = init;

        const getNumeric = (receivedValue: string | number | undefined) => {
            if (typeof receivedValue === 'number') {
                return receivedValue;
            }

            if (typeof receivedValue === 'string') {
                const parsedValue = parseFloat(receivedValue);

                if (!Number.isNaN(parsedValue)) {
                    return parsedValue;
                }
            }

            return undefined;
        }

        if (type) {
            this.type = type;
        }

        if (price || price === 0) {
            this.price = getNumeric(price);
        }

        if (bedroom || bedroom === 0) {
            this.bedroom = getNumeric(bedroom);
        }

        if (bathroom || bathroom === 0) {
            this.bathroom = getNumeric(bathroom);
        }

        if (parkingSpace || parkingSpace === 0) {
            this.parkingSpace = getNumeric(parkingSpace);
        }

        if (size || size === 0) {
            this.size = getNumeric(size);
        }

        if (state) {
            this.state = state;
        }
        
        if (city) {
            this.city = city;
        }

        if (neighborhood) {
            this.neighborhood = neighborhood;
        }

        if (address) {
            this.address = address;
        }
    }
}