import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
const MobilePage = () => {
    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler = (mango) => {
        if (selectedProduct.includes(mango)) {
            const updatedProduct = selectedProduct.filter(item => item !== mango)
            setSelectedProduct(updatedProduct)

        } else {
            setSelectedProduct([...selectedProduct, mango])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? mobileData : mobileData.filter((orange) => selectedProduct.includes(orange.company))
    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {mobileData.map((cooler) => {
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
                                <Link to={`/mobiles/${item.id}`}>
                                    <div className='pageImg'>
                                        <img src={item.image} alt="" />
                                    </div>
                                </Link>
                                <div className='proModel'>
                                    {item.company},{item.model}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
        </>

    )
}

export default MobilePage