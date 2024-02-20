import React from 'react'
import { speakerData } from '../data/speaker'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const SpeakerPage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {speakerData.map((item) => {
                    return (

                        <div >
                            <Link to={`/speaker/${item.id}`}>
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
        </>
    )
}

export default SpeakerPage