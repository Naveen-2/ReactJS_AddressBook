import React from "react";
import "./contact-form.css"
import cancelBtn from "../../assets/images/cancelButton.png";

function ContactForm() {

    const resetForm = () => {
        
    }

    const save = () => {
        
    }

    return (
    <div className="form-content">
        <form action="#" className="form" onReset={() => resetForm()} onSubmit={() => save()}>
            <div className="form-head">
                <div className="form-head-text">Person Address Form</div>
                <a href="../pages/address_book_home.html"><img className="form-head-image" src={cancelBtn}
                alt="CancelButton" /></a>
            </div>
      
            <div className="form-constrains">
                <div className="row-content">
                    <label htmlFor="name" className="label text">Full Name</label>
                    <br/>
                    <input type="text" className="input" id="name" name="name" placeholder="Your name.." autoComplete="off" required />
                    <error-output className="name-error"></error-output>
                </div>
                <div className="row-content">
                    <label htmlFor="phoneNumber" className="label text">Phone Number</label>
                    <br/>
                    <input type="tel" className="input" id="phoneNumber" name="phoneNumber" placeholder="Your phone number.."
                    autoComplete="off" required/>
                    <error-output className="tel-error"></error-output>
                </div>

                <div className="row-content">
                    <label htmlFor="address" className="label text">Address</label>
                    <br/>
                    <textarea name="address" id="address" placeholder="Your address" autoComplete="off" required></textarea>
                    <error-output className="address-error"></error-output>
                </div>
                <div className="row-content">
                    <div className="column-constrains">
                        <div className="column-content">
                            <label htmlFor="city" className="label text">City</label>
                            <br/>
                            <select name="city" id="city" required>
                                <option hidden defaultValue="Select City">Select City</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Jaipur">Jaipur</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Lucknow">Lucknow</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Pune">Pune</option>
                                <option value="Surat">Surat</option>
                            </select>
                        </div>

                        <div className="column-content">
                            <label htmlFor="state" className="label text">State</label>
                            <br/>
                            <select name="state" id="state">
                                <option hidden defaultValue="Select State">Select State</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </div>

                        <div className="column-content">
                            <label htmlFor="zip" className="label text">Zip code</label>
                            <br/>
                            <input type="text" className="input zipcode" id="zip" name="zip" autoComplete="off" placeholder="Your zipcode.." required />
                            <error-output className="zip-error"></error-output>
                        </div>
                    </div>
                </div>
                <div className="buttons-contact">
                    <button type="submit" className="button button-submit" id="submitButton">Add</button>
                    <button type="reset" className="button button-reset" id="resetButton" onClick={() => resetForm()}>Reset</button>
                </div>
            </div>
        </form>
    </div>
    )
}

export default ContactForm;