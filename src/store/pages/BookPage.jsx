import React, { useState } from 'react'
import { booksData } from '../data/books'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const BookPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([])

    console.log(booksData, 'line7')
    return (
        <>
            <Navbar />
            <div className="pro-selected"></div>
            <div className='pageSection'>
                {booksData.map((item) => {
                    return (
                        <div>
                            <Link to={`/book/${item.id}`}>
                                <div className='pageImg'>
                                    <img src={item.image} alt="" />
                                </div>
                            </Link>
                            <div className='proModel'>
                                {item.title},{item.author}
                            </div>
                        </div>
                    )

                })}
            </div>
        </>


    )
}

export default BookPage