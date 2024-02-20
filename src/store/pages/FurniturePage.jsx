import React from 'react'
import { furnitureData } from '../data/furniture'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const FurniturePage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {furnitureData.map((item) => {
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
        </>
    )
}

export default FurniturePage
