export interface IStreet {
    id: number;
	prefix: IStreetPrefix;
	name: string;
	cityId: number;
	city: string;
	nameWithPrefix: string;
}

export interface IStreetPrefix {
	id: number;
	name: string;
	shortName: string;
}