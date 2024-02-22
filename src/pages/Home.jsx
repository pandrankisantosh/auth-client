import React from 'react'
import Header from '../component/Header'
import RecommendedFood from '../component/RecommendedFood'
import Service from '../component/Service'
import Service2 from '../component/Service2'
import NewFoods from '../component/NewFoods'
import Special from '../component/Special'

const Home = () => {
    return (
        <>
            <Header />
            <RecommendedFood />
            <Service />
            <NewFoods />
            <Service2 />
            <Special />

        </>
    )
}

export default Home
