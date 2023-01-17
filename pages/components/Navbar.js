import Link from 'next/link'
import React from 'react'
import styles from '../../styles/allStyle/navBar.module.css'
import CategoryDropDown from './CategoryDropDown';
import About from './About'
const Navbar = () => {
    return (
        <div className={styles.navBar__container}>
            <CategoryDropDown />
            <div className={styles.link__container}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/" className={styles.link}>Home</Link>
                        </li>
                        <li>
                            <Link href="/components/about" className={styles.link}>About Us</Link>
                        </li>
                        <li>
                            <Link href="/" className={styles.link}>Shope</Link>
                        </li>
                        <li>
                            <Link href="/" className={styles.link}>Blog</Link>
                        </li>
                        <li>
                            <Link href="/" className={styles.link}>Gallery</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.offer__box}>
                <div className={styles.offer__box_hover}></div>
                <span style={{ fontWeight: "700" }}>BLACK FRIDAY <br /> <span style={{ fontWeight: "500" }}>GET 40% OFF</span></span>
            </div>
        </div>
    )
}

export default Navbar