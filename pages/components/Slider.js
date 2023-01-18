import React from 'react'
import styles from '../../styles/allStyle/slider.module.css'
const Slider = () => {
    return (
        <>
            <div className={styles.slider__main__div}>
                <div className={styles.overlay}>
                <div className={styles.slider__container}>
                    <div className={styles.text}>
                        <h4>Grocery at Home</h4>
                        <h1>Your daily needs</h1>
                        <p>Organic food is natural food.That is benificial for human cunsuption.Organic food is natural food.That is benificial for human cunsuption.</p>
                        <div className={styles.slider__button__container}>
                            <button className={styles.slider__button__one}>Learn More</button>
                            <button className={styles.slider__button__two}>go shope</button>
                        </div>
                    </div>
                    <div className={styles.discount}>
                        <img src="images/discount.png" alt="discountImg" />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Slider