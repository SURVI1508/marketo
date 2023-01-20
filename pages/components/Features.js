import styles from '../../styles/allStyle/feture.module.css'


const Features = () => {
    return (
        <>
            <div className={styles.features__main__div}>
                <div className={styles.features__main__container}>
                    <div className={styles.features}>
                        <h6>Free Delivery</h6>
                        <p>from $78</p>
                    </div>
                    <div className={styles.features}>
                        <h6>99% Customer</h6>
                        <p>feedback</p>
                    </div>
                    <div className={styles.features}>
                        <h6>10 Days</h6>
                        <p>for free return</p>
                    </div>
                    <div className={styles.features}>
                        <h6>Payment</h6>
                        <p>secure system</p>
                    </div>
                    <div className={styles.features} style={{ border: "none" }}>
                        <h6>24/7</h6>
                        <p>online support</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features