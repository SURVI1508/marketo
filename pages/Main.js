import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Navigator from './components/Navigator'
import Slider from './components/Slider'
import Category from './components/Category'
import Footer from './components/Footer'
import GetUpdate from './components/GetUpdate'
import Sponcered from './components/Sponcered'
import MarketPlace from './components/MarketPlace'
import CustomerAnalysis from './components/CustomerAnalysis'
import GoodFood from './components/GoodFood'
import Descover from './components/Descover'
import BonusImg from './components/BonusImg'
import Features from './components/Features'
import TrendingItem from './components/TrendingItem'
import CatItem from './components/CatItem'


import 'bootstrap/dist/css/bootstrap.min.css';
const Main = () => {
    return (
        <div>
            <Header />
            {/* <Navigator /> */}
            {/* <About /> */}
            <Slider />
            <Category />
            <CatItem/>
            <TrendingItem/>
            <Features />
            <BonusImg />
            <Descover />
            <GoodFood />
            <CustomerAnalysis />
            <MarketPlace />
            <Sponcered />
            <GetUpdate />
            <Footer />
        </div>
    )
}

export default Main