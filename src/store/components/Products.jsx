import React from 'react'
import Mobiles from './Mobiles'
import Computers from './Computers'
import Women from './Women'
import Books from './Books'
import Ac from './Ac'
import Fridge from './Fridge'
import Furniture from './Furniture'
import Kitchen from './Kitchen'
import Men from './Men'
import ProData from './ProData'
import Speaker from './Speaker'
import Tv from './Tv'
import Watch from './Watch'
import Banner from './Banner'
import WomenCollection from './WomenCollection'

const Products = () => {
    return (
        <div>
            <Banner />
            <Men />
            <WomenCollection />
            <Women />
            <Mobiles />
            <Computers />

            <Ac />
            <Books />
            <Fridge />
            <Furniture />
            <Kitchen />

            <ProData />
            <Speaker />
            <Tv />
            <Watch />



        </div>
    )
}

export default Products
