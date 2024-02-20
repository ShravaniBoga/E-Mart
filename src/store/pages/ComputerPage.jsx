import React, { useState } from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const ComputerPage = (mango) => {
    const [selectedProduct, setSelectedProduct] = useState([]);
    const companyHandler = (mango) => {
        // mango=microsoft menas( ===mango==individual company in array of companies) 
        if (selectedProduct.includes(mango)) {
            const updatedProduct = selectedProduct.filter(item => item !== mango)
            // remaining will be empty array .. consdtion when it is checked ..if we want to uncheck it 
            //#####  1...mango =microsoft ,item =indivial item in array ..now her array has only microsft that is stored in mango parameter 
            // so by filter method we give condition as
            // microsoft!==microsoft (condition is false ... so it wont we written in array ).. so remaining is empty array (with no value or checked )
            setSelectedProduct(updatedProduct)
            // new array = ha with ms new array is formed    array - ms
        } else {
            setSelectedProduct([mango])
            // mango=microsoftcopany   ""here""
            // push ms inside select product
        }
    }

    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {computerData.map((comp) => {
                        // comp  =  computerData's individual item data
                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type="checkbox"
                                        checked={selectedProduct.includes(comp.company)}
                                        // example =if we checked microsoft company

                                        onChange={() => companyHandler(comp.company)} />
                                    {/* check box =checked   or unchecked ==trigers .. companyHandler
                                        this function */}
                                    {comp.company}
                                </label>
                            </div>
                        )
                    })}
                </div>
                <div className='pageSection'>

                    {computerData.map((item) => {
                        return (
                            <div>
                                <Link to={`/computer/${item.id}`}>
                                    <div className="pageImg">
                                        <img src={item.image} alt="" />
                                    </div>
                                </Link>
                                <div className="proModel">
                                    {item.company},{item.model}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


        </>

    )


}

export default ComputerPage
