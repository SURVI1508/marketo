import { useState } from 'react';
import styles from '../../styles/allStyle/category.module.css'
const Category = () => {
    const [bg, setBg] = useState()
    const active = () => {
        // var one = document.getElementById("one");
        // var three = document.getElementById("three");
        // one.style.backgroundColor = "#51aa1b"
        // three.style.backgroundColor = "#51aa1b"
        setBg()
    }


    return (
        <div className={styles.category__main__div}>
            <div className={styles.category__main__container}>
                <div className={styles.category__box} onClick={active} id="one">
                    <div className={styles.line__line}>
                        <h4>Grocery</h4>
                        <p>20 items available</p>
                    </div>
                    <div className={styles.arrow}></div>
                </div>
                <div className={styles.category__box} onClick={active} id="one">
                    <div className={styles.line__line}>
                        <h4>Grocery</h4>
                        <p>20 items available</p>
                    </div>
                </div>
                <div className={styles.category__box} onClick={active} id="one">
                    <div className={styles.line__line}>
                        <h4>Grocery</h4>
                        <p>20 items available</p>
                    </div>
                </div>
                <div className={styles.category__box} onClick={active} id="three">
                    <div className={styles.line__line}>
                        <h4>Grocery</h4>
                        <p>20 items available</p>
                    </div>
                </div>
                <div className={styles.category__box} onClick={active} id="one">
                    <div className={styles.line__line}>
                        <h4>Grocery</h4>
                        <p>20 items available</p>
                    </div>
                </div>
                <div className={styles.category__box} onClick={active} id="one">
                    <h4>Grocery</h4>
                    <p>20 items available</p>
                </div>
            </div>
        </div>
    )
}

export default Category