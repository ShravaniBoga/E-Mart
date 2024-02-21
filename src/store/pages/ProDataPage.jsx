import React, { useState } from 'react'
import { mobileData } from '../data/proData'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const ProDataPage = () => {
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
                                <Link to={`/prodata/${item.id}`}>
                                    <div className='proImg'>
                                        <img src={item.image} alt="" />
                                    </div>
                                </Link>
                                <div className='proModel'>
                                    {item.company},{item.model}
                                </div>
                            </div>
                        )


                    })
                    }
                </div>
            </div>
        </>
    )
}

export default ProDataPage
