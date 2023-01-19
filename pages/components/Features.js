import styles from '../../styles/allStyle/customer.module.css'


const Features = () => {
    return (
        <>
            <div className={styles.customerAnalysis__main__div}>
                <div className={styles.customerAnalysis__main__container}>
                    <div className={styles.customer}>
                        <h4>Happy Customers</h4>
                        <p>1,200 +</p>
                    </div>
                    <div className={styles.customer}>
                        <h4>Customer Satisfaction</h4>
                        <p>100 %</p>
                    </div>
                    <div className={styles.customer}>
                        <h4>Organic Products</h4>
                        <p>1 M+</p>
                    </div>
                    <div className={styles.customer}>
                        <h4>Awards Winning</h4>
                        <p>778 +</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features