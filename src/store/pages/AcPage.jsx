import React, { useState } from "react";

import { acData } from "../data/ac";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const AcPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler = (mango) => {
        if (selectedProduct.includes(mango)) {
            const updatedProduct = selectedProduct.filter(item => item !== mango)
            setSelectedProduct(updatedProduct)

        } else {
            setSelectedProduct([...selectedProduct, mango])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? acData : acData.filter((orange) => selectedProduct.includes(orange.company))
    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {acData.map((cooler) => {
                        return (
                            <div>
                                <label>
                                    <input type="checkbox"
                                        checked={selectedProduct.includes(cooler.company)}
                                        onChange={() => companyHandler(cooler.company)}

                                    />
                                    {cooler.company}
                                </label>
                            </div>
                        )

                    })}
                </div>

                <div className="pageSection">
                    {filteredProduct.map((item) => {
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
            </div>
        </>
    );
};

export default AcPage;
