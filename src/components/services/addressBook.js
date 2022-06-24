import config from "../Config/config";

// const axios = require('axios').default;
import axios from "axios";

class AddressBook {
    baseURL = config.baseUrl;
    addAddressBook = (data) => {
        return axios.post(`${this.baseURL}addressbook/create`, data);
    }

    getAllContact = () => {
        return axios.get(`${this.baseURL}addressbook`);
    }

    deleteContact = (id) => {
        return axios.delete(`${this.baseURL}addressbook/delete/${id}`);
    }

    getContact(id) {
        return axios.get(`${this.baseURL}addressbook/get/${id}`);
    }

    updateContact(id,data) {
        return axios.put(`${this.baseURL}addressbook/update/${id}`, data);
    }

    sortByCity = () => {
        return axios.get(`${this.baseURL}addressbook/sortbycity`);
    }

    sortByState = () => {
        return axios.get(`${this.baseURL}addressbook/sortbystate`);
    }
}
export default new AddressBook();
