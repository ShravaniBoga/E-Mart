import React, { useState } from 'react'
import { watchData } from '../data/watch'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const WatchPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([])
    const brandHandler = (mango) => {
        if (selectedProduct.includes(mango)) {
            const updatedProduct = selectedProduct.filter(item => item !== mango)
            setSelectedProduct(updatedProduct)

        } else {
            setSelectedProduct([...selectedProduct, mango])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? watchData : watchData.filter((orange) => selectedProduct.includes(orange.brand))
    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {watchData.map((cooler) => {
                        return (
                            <div>
                                <label>
                                    <input type="checkbox"
                                        checked={selectedProduct.includes(cooler.brand)}
                                        onChange={() => brandHandler(cooler.brand)}

                                    />
                                    {cooler.brand}
                                </label>
                            </div>
                        )

                    })}
                </div>

                <div className="pageSection">
                    {filteredProduct.map((item) => {
                        return (
                            <div>
                                <Link to={`/watch/${item.id}`}>
                                    <div className='pageImg'>
                                        <img src={item.image} alt="" />
                                    </div>
                                </Link>
                                <div className='proModel'>
                                    {item.brand},{item.model}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default WatchPage