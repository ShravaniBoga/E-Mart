import React, { useState } from 'react'
import { furnitureData } from '../data/furniture'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const FurniturePage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);
    const brandHandler = (mango) => {
        // mango=microsoft menas( ===mango==individual brand in array of companies) 
        if (selectedProduct.includes(mango)) {
            const updatedProduct = selectedProduct.filter(item => item !== mango)
            // remaining will be empty array .. consdtion when it is checked ..if we want to uncheck it 
            //#####  1...mango =microsoft ,item =indivial item in array ..now her array has only microsft that is stored in mango parameter 
            // so by filter method we give condition as
            // microsoft!==microsoft (condition is false ... so it wont we written in array ).. so remaining is empty array (with no value or checked )
            setSelectedProduct(updatedProduct)
            // new array = ha with ms new array is formed    array - ms
        } else {
            setSelectedProduct([...selectedProduct, mango])
            // mango=microsoftcopany   ""here""
            // push ms inside select product
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? furnitureData : furnitureData.filter((orange) => selectedProduct.includes(orange.brand))

    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {furnitureData.map((comp) => {
                        // comp  =  furnitureData's individual item data
                        return (
                            <div className='pro-input'>
                                <label>
                                    {/* # label is use like this if click on leable also it will be checked  */}
                                    <input type="checkbox"
                                        checked={selectedProduct.includes(comp.brand)}
                                        // example =if we checked microsoft brand

                                        onChange={() => brandHandler(comp.brand)} />
                                    {/* check box =checked   or unchecked ==trigers .. brandHandler
                                        this function */}
                                    {comp.brand}
                                </label>
                            </div>
                        )
                    })}
                </div>
                <div className='pageSection'>
                    {filteredProduct.map((item) => {
                        return (
                            <div>
                                <Link to={`/furniture/${item.id}`}>
                                    <div className='pageImg'>
                                        <img src={item.image} alt="furniture" />
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

export default FurniturePage
