import React, { useEffect, useState } from 'react';
import './Ceos.css';

import Ceo from '../Ceo/Ceo';
import Cart from '../Cart/Cart';
const Ceos = () => {
    const [ceos, setCeos] = useState([]);
    useEffect(() => {
        fetch('./ceo.JSON')
            .then(res => res.json())
            .then(data => setCeos(data))
    }, [])
    return (
        <div className="row">

            <div className="col-md-9 border border-end p-4">
                <div className="row row-cols-3 row-cols-md-3 g-4">
                    {
                        ceos.map(ceo => <Ceo key={ceo.id} ceo={ceo}></Ceo>)
                    }
                </div>
            </div>
            <div className="col-md-3">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Ceos;