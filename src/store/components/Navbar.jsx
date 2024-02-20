import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
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
            <div className="subMenu">
                <ul>
                    <Link to="/mobile">
                        <li>Mobiles</li>
                    </Link >
                    <Link to='/watch'>
                        <li>Watch</li>
                    </Link>
                    <Link to='/tv'>
                        <li>Tv</li>
                    </Link>

                    <Link to='/speaker'>
                        <li>Speaker</li>
                    </Link>
                    <Link to='/women'>
                        <li>Woman Wear</li>
                    </Link>
                    <Link to='/computer'>
                        <li>Computers</li>
                    </Link>
                    <Link to="/furniture">
                        <li>Furniture</li>
                    </Link>
                    <Link to='/kitchen'>
                        <li>Kitchen</li>
                    </Link>
                    <Link to="/fridge">
                        <li>Fridge</li>
                    </Link>
                    <Link to='/book'>
                        <li>Books</li>
                    </Link>
                    <Link to='/prodata'>
                        <li>ProData</li>
                    </Link>
                    <Link to="/ac">
                        <li>Ac</li>
                    </Link>
                    <Link to='/men'>
                        <li>Mens Wear</li>
                    </Link>
                </ul>
            </div>
        </>
    );
};
export default Navbar;
