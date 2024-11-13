import axios from "axios";
import { config } from "./config";

export const apiService = axios.create({
    baseURL: config.api_url,
    headers: {
      "Content-type": "application/json",
    },
  });

//Запрос для получения списка ук  
export const getStreets = async () => {
    return await apiService
      .get(`Request/streets`)
      .then((resp) => resp.data);
};

//Запрос для получения списка квартир выбранного ук
export const getHouses = async (streetId: number) => {
    return await apiService
      .get(`Request/houses/${streetId}`)
      .then((resp) => resp.data);
};

//Запрос для получения списка квартир выбранного дома
export const getHouseFlats = async (houseId: number) => {
    return await apiService
      .get(`Request/houses/${houseId}`)
      .then((resp) => resp.data);
};

//Запрос для получения жильцов выбранной квартиры
export const getFlatClients = async (addressId: number) => {
    return await apiService
      .get(`HousingStock/clients?addressId=${addressId}`)
      .then((resp) => resp.data);
};

//Запрос для привязки жильца к квартире
export const putFlatAddNewClient = async (addressId: number, clientId: number) => {
    const body = {
        AddressId: addressId,
        ClientId: clientId
    }
    return await apiService
      .put('HousingStock/bind_client', JSON.stringify(body))
      .then((resp) => resp.data);
};

//Запрос для добавления жильца
export const addClient = async (name: string, phone: string, email: string) => {
    const body = {
        BindId: 0,
        Email: email,
        Id: 0,
        Name: name,
        Phone: phone
    }
    return await apiService
      .post('HousingStock/client', JSON.stringify(body))
      .then((resp) => resp.data);
};

//Запрос для удаления жильца
export const deleteClient = async (clientId: number) => {
    return await apiService
      .delete(`HousingStock/bind_client/${clientId}'`)
      .then((resp) => resp.data);
};
