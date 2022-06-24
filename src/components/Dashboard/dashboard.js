import React, { useEffect, useState } from "react";
import './dashboard.css';
import { Link } from "react-router-dom";
import Contact from "./contact";
import addressBook from "../services/addressBook";


function Dashboard() {

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

    return (
        <>
           
            <div className="main-content">
                <div className="header-content person-header">
                    <div className="person-detail-text">
                        Person Details
                        <div className="person-count">{contactArray.length}</div>
                    </div>
                    <Link to="/form" className="add-button">
                        <div> + Add Person </div>
                    </Link>
                </div>
                <div className="table-main">
                    <Contact contactArray = {contactArray}/>
                </div>
            </div>
        </>
    );
}
export default Dashboard;