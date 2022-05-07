import React,{useState} from "react";
import "./dashboard.css";
import {Link} from "react-router-dom";
import addressBookService from "../../service/address-book-service";
import ContactCard from "../ContactCard/contact-card";


function AddressDashboard(){

    const [contactsCount, setContactsCount] = useState([]);


    const retrieveContacts = async () => {
        const response = await addressBookService.getContact();
        return response;
    };
    const getContactsCount = async () => {
        const allContacts = await retrieveContacts();
        // console.log(allContacts.data.length)
        if(allContacts) {
            setContactsCount(allContacts.data.length);
        }
        
    };

    getContactsCount();


    return(
        <>
            <div className="main-content">
                <div className="main-header-content">
                    <div className="addressbook-detail-text">
                        Person Details
                        <div className="contact-count">{contactsCount}</div>
                    </div>
                    <Link to= "/contact-form" className="add-button">
                        
                        <img src="../assets/icons/plus_symbol.svg" alt="" />Add Person
                        
                    </Link>
                </div>
            </div>
        
        <div className="main-content">
            <div className="table-main">
                <table id="table-display" className="table">
                <thead>
                        <tr>
                            <th>Contact ID</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ContactCard />
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}

export default AddressDashboard;