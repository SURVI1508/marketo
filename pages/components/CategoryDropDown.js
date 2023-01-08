import React from 'react'
import styles from '../../styles/allStyle/categoryDropDown.module.css'
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';

const CategoryDropDown = () => {
    const dropDown = () => {
        alert("")
    }

    return (
        <>
            <div className={styles.dropDown__main_div}>
                <div className={styles.dropDown__div} onClick={dropDown}>
                    <HiMenuAlt2 style={{ fontSize: "25px" }} /><span style={{ fontWeight: "bold" }}>All Category</span><IoIosArrowDown style={{ fontSize: "25px" }} />
                </div>
                <div className={styles.categories}>
                    <li>All</li>
                    <li>Beuty </li>
                    <li>Fashion</li>
                    <li>Grocery</li>
                    <li>Accesories</li>
                    <li>Mobiles</li>
                </div>
            </div>
        </>
    )
}

export default CategoryDropDown