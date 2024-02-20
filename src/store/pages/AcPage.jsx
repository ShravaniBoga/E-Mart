import React, { useState } from "react";

import { acData } from "../data/ac";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const AcPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler = (mango) => {
        if (selectedProduct.include(mango)) {
            setSelectedProduct(selec.filter(item => item !== mango))
        }
        else {
            setSelectedProduct([mango])
        }
    }
    return (
        <>
            <Navbar />
            <div className="pro-selected">
                {acData.map((cooler) => {
                    return (
                        <div>
                            <label>
                                <input type="checkbox"
                                    checked={selectedProduct.includes(cooler.company)}
                                    onChange={() => companyHandler(cooler.company)}

                                />
                            </label>
                        </div>
                    )

                })}
            </div>

            <div className="pageSection">
                {acData.map((item) => {
                    return (
                        <div>
                            <Link to={`/ac/${item.id}`}>
                                <div className="pageImg">
                                    <img src={item.image} alt="no" />
                                </div>
                            </Link>

                            <div className="proModel">
                                {item.company},{item.model}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default AcPage;
