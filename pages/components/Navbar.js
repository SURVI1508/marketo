import Link from 'next/link'
import React from 'react'
import styles from '../../styles/allStyle/navBar.module.css'
import CategoryDropDown from './CategoryDropDown'
const Navbar = () => {
    return (
        <div className={styles.navBar__container}>
            <CategoryDropDown />
            <div className={styles.link__container}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">About Us</Link>
                        </li>
                        <li>
                            <Link href="/">Shope</Link>
                        </li>
                        <li>
                            <Link href="/">Blog</Link>
                        </li>
                        <li>
                            <Link href="/">Gallery</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.offer__box}>
                <div className={styles.offer__box_hover}></div>
                <span style={{fontWeight:"700"}}>BLACK FRIDAY <br /> <span  style={{fontWeight:"500"}}>GET 40% OFF</span></span>
                
            </div>
        </div>
    )
}

export default Navbar