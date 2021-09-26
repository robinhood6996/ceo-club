import React, { useEffect, useState } from 'react';
import './Ceos.css';
import Swal from 'sweetalert2';
import Ceo from '../Ceo/Ceo';
import Cart from '../Cart/Cart';
const Ceos = () => {
    const [ceos, setCeos] = useState([]);
    const [cart, setCart] = useState([]);
    // Read data from Json file and send to ceo Component
    useEffect(() => {
        fetch('./ceo.JSON')
            .then(res => res.json())
            .then(data => setCeos(data))
    }, []);

    // Handle Add to cart function
    const handleAdd = ceo => {
        const existingCart = [...cart];
        if (existingCart.indexOf(ceo) === -1) {
            const newCart = [...existingCart, ceo];
            setCart(newCart);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Its already in your cart',
            })
        }




    };
    return (
        <div className="row">

            <div className="col-md-9 border border-end p-4">
                <div className="row row-cols-3 row-cols-md-3 g-4">
                    {/* Ceo Component */}
                    {
                        ceos.map(ceo => <Ceo key={ceo.id} ceo={ceo} handleAdd={handleAdd}></Ceo>)
                    }
                </div>
            </div>
            {/* Cart Component */}
            <div className="col-md-3">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Ceos;