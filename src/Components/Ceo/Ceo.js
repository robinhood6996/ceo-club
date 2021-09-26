import React from 'react';
import './Ceo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Ceo = (props) => {
    // Destructruing from propertise 
    const { name, worth, company, expect_donation, age, img } = props.ceo;

    return (
        <div>
            {/* Cart Component */}
            <div className="col">
                <div className="card h-100 ceo p-1">
                    <img src={img} className="card-img-top " alt="..." />
                    <div className="card-body  mt-2 border-top">
                        <div>
                            <h5 className="card-title">Name: {name}</h5>
                            <h5 className="card-title">Age: {age}</h5>
                            <h5 className="card-title">Company: {company}</h5>
                            <h5 className="card-title">Worth: {worth}</h5>
                            <h5 className="card-title">Exp. Donation: <span className="ammount">${expect_donation}</span></h5>

                        </div>
                        <button className="btn btn-primary me-3" onClick={() => props.handleAdd(props.ceo)}> <FontAwesomeIcon icon={faUserPlus} /> Add to list</button>
                        <button className="btn btn-primary me-3"><FontAwesomeIcon icon={faPaperPlane} /> Send Invitaion</button>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Ceo;