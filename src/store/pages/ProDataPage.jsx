import React from 'react'
import { mobileData } from '../data/proData'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const ProDataPage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {mobileData.map((item) => {
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
        </>
    )
}

export default ProDataPage
