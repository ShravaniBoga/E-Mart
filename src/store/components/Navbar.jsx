import React from "react";

const Navbar = () => {
    return (
        <div className="navSection">
            <div className="title">
                <h2>E-Mart</h2>
            </div>
            <div className="search">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="user">
                <div className="user-detail">SignIn/SignUp</div>
                <div className="cart">Cart</div>
            </div>
        </div>
    );
};

export default Navbar;
