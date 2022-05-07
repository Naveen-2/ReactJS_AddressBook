
import React, {useState, useEffect} from "react";
import AddressBookService from "../../service/address-book-service";
import edit_btn from '../../assets/icons/create-black-18dp.svg';
import delete_btn from '../../assets/icons/delete-black-18dp.svg';
import {Link} from "react-router-dom";


const ContactCard = () => { 
   
    const [ContactsData, setContactsData] = useState([]);
  
    const retrieveContacts = async () => {
        const response = await AddressBookService.getContact();
        return response;
    }; 

    useEffect(() => {
        const getAllContactData = async () => {
            const allContacts = await retrieveContacts();
            if(allContacts) setContactsData(allContacts);
        };

        getAllContactData();
    }, []);

    useEffect(() => {

    }, [ContactsData]);


    const removeContact = (id) => {
        const response = AddressBookService.deleteContact(id);
        // console.log(response);
        window.location.reload();
        return response;
    }
    
    return (
        <>  
            {
                ContactsData.data && ContactsData.data.map((element, index) =>(
                    <tr key={index}>
                        <td className="contactID">{element.id}</td>
                        <td className="contactName">{element.name}</td>
                        <td className="contactPhoneNumber">{element.phoneNumber}</td>
                        <td className="contactAddress">{element.address}</td>
                        <td className="contactCity">{element.city}</td>
                        <td className="contactState">{element.state}</td>
                        <td className="contactZip">{element.zip}</td>
                        <td>

                            <img src={delete_btn} alt="delete" id={element.id} onClick={() => {removeContact(element.id)}}/>
                            <Link to={{ pathname: "/contact-form", state: {ContactData: element} }}>
                                <img src={edit_btn} alt="edit" id={element.id}/>
                            </Link>
                        </td>
                    </tr> 
                ))
            }

        </>
    );
}

export default ContactCard;