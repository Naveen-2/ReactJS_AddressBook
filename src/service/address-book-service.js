import config from '../config/config';
import axios from 'axios';

class AddressBookService {
    baseURL = config.baseURL;
    addContact = (data) => {
        if(data.isUpdate){
            return axios.put(`${this.baseURL}contacts/${data.id}`, data);
        } else {
        return axios.post(`${this.baseURL}contacts`, data);
        }
    }

    getContact = () => {
        return axios.get(`${this.baseURL}contacts`);
    }

    deleteContact = (id) => {
        return axios.delete(`${this.baseURL}contacts/${id}`);
    } 

    editContact = (id) => {
        return axios.get(`${this.baseURL}contacts/${id}`);
    }
}

export default new AddressBookService();