export interface IFlat {
	id: number,
	flat: string,
	typeId: number,
	typeName: string,
	name: string
}

export interface IFlatType {
	clients: IClientType[];
	accounts: IAccounts[];
	addressId: number;
	streetId: number;
	houseId: number;
	streetName: string;
	building: string;
	flat: string;
}
export interface IAccountsType {
	id: number;
	name: string;
}
export interface IAccounts {
	bindId: number;
	account: string;
	type: IAccountsType;
}
export interface IClientType {
	id: number;
	name: string;
	phone: string;
	email: string;
	bindId: number;
}
export interface IAddClientRequest {
	name: string;
	phone: string;
	email: string;
}