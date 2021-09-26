import React from 'react';
import './Cart.css';
import Swal from 'sweetalert2';
const Cart = (props) => {
    const { cart } = props;
    console.log(cart);

    let total = 0;
    let ceos = [];

    // Loop over cart and get each ceo also store expected donation and ceo details in array
    for (const ceo of cart) {
        total += ceo.expect_donation;
        if (total >= 360000) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Congratulation target has been reached',
                showConfirmButton: false,
                timer: 1500
            })
        }
        ceos.push(
            {
                id: ceo.id,
                name: ceo.name,
                img: ceo.img
            }
        );
    }
    return (
        <div>
            <h2 className="cart-header text-center">Added CEO'S: {cart.length}</h2>
            <h3 className="donation">Collected Ammount: <span className="donation-ammount">${total}</span></h3>
            {/* Ceo Name and Ceo image show in cart  */}
            {
                ceos.map(ceo => <li key={ceo.id}> <img src={ceo.img} alt="" /> <span className="name">Name: {ceo.name}</span> </li>)
            }
        </div>
    );
};

export default Cart;