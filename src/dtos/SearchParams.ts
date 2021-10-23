import RealtyTypeEnum from '../enums/RealtyType';

export default class SearchParams {

    public type?: RealtyTypeEnum;

    public bedroom?: number;

    public bathroom?: number;

    public parkingSpace?: number;

    public city?: string;

    public neighborhood?: string;

    public constructor(init: any) {
        const {
            type,
            bedroom,
            bathroom,
            parkingSpace,
            city,
            neighborhood
        } = init;

        const getNumeric = (receivedValue: string | undefined) => {
            if (receivedValue) {
                const parsedValue = parseFloat(receivedValue);

                if (!Number.isNaN(parsedValue)) {
                    return parsedValue;
                }
            }

            return undefined;
        }

        if (type && Object.values(RealtyTypeEnum).includes(type)) {
            this.type = type;
        }

        if (bedroom) {
            this.bedroom = getNumeric(bedroom);
        }

        if (bathroom) {
            this.bathroom = getNumeric(bathroom);
        }

        if (parkingSpace) {
            this.parkingSpace = getNumeric(parkingSpace);
        }
        
        if (city) {
            this.city = city;
        }

        if (neighborhood) {
            this.neighborhood = neighborhood;
        }
    }
}