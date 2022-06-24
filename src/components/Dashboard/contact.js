import React, {useState, useEffect} from "react";
import './dashboard.css';
import editLogo from '../../assets/icons/edit.png';
import deleteLogo from '../../assets/icons/delete.jpg';
import {withRouter} from "react-router-dom";
import addressBook from "../services/addressBook";
import { clear } from "@testing-library/user-event/dist/clear";

const Contact = (props) => {

    const [contactArray, setContact] = useState([]);

    useEffect(() => {
        getAllContacts();
    }, []);

    const getAllContacts = () => {
        addressBook.getAllContact().then((response) => {
            const allContacts = response.data.data;
            console.log(allContacts)
            setContact(allContacts);
        }).catch((error) => {
            alert(error);
        })
    }

    const remove = (id) => {
        addressBook.deleteContact(id).then((response) => {
            console.log(response.data.data);
            window.location.reload();
        }).catch((error) => {
            alert(error);
        })
    }

    const update = (id) => {
        props.history.push(`form/${id}`);
    }

    const sortByCity = () => {
        addressBook.sortByCity().then((response) => {
            const allContacts = response.data.data;
            console.log(allContacts)
            setContact(allContacts);
        }).catch((error) => {
            alert(error);
        })
    }

    const sortByState = () => {
        addressBook.sortByState().then((response) => {
            const allContacts = response.data.data;
            console.log(allContacts)
            setContact(allContacts);
        }).catch((error) => {
            alert(error);
        })
    }

    // console.log(props)
    return (
        <table id="table-display" className="table">
            <thead>
                <tr key={-1}>
                    <th>Contact ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th onClick={ () => sortByCity() }>City</th>
                    <th onClick={ () => sortByState() }>State</th>
                    <th>Phone Number</th>
                    <th>Zip Code</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                contactArray && contactArray.map((element, index) => (
                    <tr key={index}>
                        <td>{element.contactId}</td>
                        <td>{element.firstName}</td>
                        <td>{element.lastName}</td>
                        <td>{element.email}</td>
                        <td>{element.address}</td>
                        <td>{element.city}</td>
                        <td>{element.state}</td>
                        <td>{element.phoneNumber}</td>
                        <td>{element.zipCode}</td>
                        <td>
                            <img src={editLogo} alt="edit" onClick={ () => update(element.contactId)} />
                            <img src={deleteLogo} alt="delete" onClick={ () => remove(element.contactId)}/>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
}
export default withRouter(Contact);