import React from 'react'
import { fridgeData } from '../data/fridge'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const FridgePage = () => {
    return (

        <>
            <Navbar />
            <div className='pageSection'>
                {fridgeData.map((item) => {
                    return (
                        <div>
                            <Link to={`/fridge/${item.id}`}>
                                <div className='pageImg'>
                                    <img src={item.image} alt="" />
                                </div>
                            </Link>
                            <div className='p'>
                                {item.brand},{item.model}
                            </div>
                        </div>
                    )
                })}

            </div>
        </>

    )
}

export default FridgePage
