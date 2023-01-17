import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Navigator from './components/Navigator'
import Slider from './components/Slider'
import Category from './components/Category'


import 'bootstrap/dist/css/bootstrap.min.css';
const Main = () => {
    return (
        <div>

            <Header />
            {/* <Navigator /> */}
            {/* <About /> */}
            <Slider />
            <Category />
        </div>
    )
}

export default Main