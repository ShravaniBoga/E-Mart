import React, { useState } from 'react'
// import { booksData } from '../data/books'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { booksData } from '../data/books';


const BookPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);
    const authorHandler = (mango) => {

        if (selectedProduct.includes(mango)) {
            const updatedProduct = selectedProduct.filter(item => item !== mango)
            setSelectedProduct(updatedProduct)
        } else {
            setSelectedProduct([...selectedProduct, mango])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? booksData : booksData.filter((orange) => selectedProduct.includes(orange.author))


    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {booksData.map((comp) => {

                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type="checkbox"
                                        checked={selectedProduct.includes(comp.author)}
                                        onChange={() => authorHandler(comp.author)} />

                                    {comp.author}
                                </label>
                            </div>
                        )
                    })}
                </div>

                <div className='pageSection'>
                    {filteredProduct.map((item) => {
                        return (
                            <div>
                                <Link to={`/book/${item.id}`}>
                                    <div className='pageImg'>
                                        <img src={item.image} alt="" />
                                    </div>
                                </Link>
                                <div className='proModel'>
                                    {item.author},{item.author}
                                </div>
                            </div>

                        )

                    })}
                </div>
            </div>
        </>


    )
}

export default BookPage