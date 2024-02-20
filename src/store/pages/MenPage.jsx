import React from 'react'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MenPage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {menData.map((item) => {
                    return (
                        <div >
                            <Link to={`/men/${item.id}`}>
                                <div className='pageImg'>
                                    <img src={item.image} alt="" />
                                </div>
                            </Link>
                            <div>
                                {item.brand},{item.model}
                            </div>
                        </div>

                    )
                })
                }
            </div>
        </>
    )
}

export default MenPage