import React from 'react'
import styles from '../../styles/allStyle/categoryDropDown.module.css'
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';

const CategoryDropDown = () => {
    const dropDown = () => {
        var item = document.getElementById("item");
        var arrow = document.getElementsByClassName("arrow");
        if (item.style.display === "none") {
            item.style.display = "block";
            // arrow.style.tra = "rotate(3.142rad)";

        } else {
            item.style.display = "none";
            // arrow.style.tra = "rotate(0rad)";
        }
    }

    return (
        <>
            <div className={styles.dropDown__main_div}>
                <div className={styles.dropDown__div} onClick={dropDown}>
                    <HiMenuAlt2 style={{ fontSize: "25px" }} /><span style={{ fontWeight: "bold" }}>All Category</span><IoIosArrowDown style={{ fontSize: "25px" }} className={styles.arrow} />
                </div>
                <div className={styles.categories} id="item">
                    <li>All</li>
                    <li>Beuty </li>
                    <li>Fashion</li>
                    <li>Grocery</li>
                    <li>Accesories</li>
                    <li>Mobiles</li>
                    <li>Accesories</li>
                    <li>Mobiles</li>
                </div>
            </div>
        </>
    )
}

export default CategoryDropDown