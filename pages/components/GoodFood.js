import styles from '../../styles/allStyle/goodFood.module.css'

const GoodFood = () => {
    return (
        <div className={styles.goodFood__main__div}>
            <div className={styles.goodFood__main__container}>
                <div className={styles.juice__img}>
                    <img src="/images/juice2.jpg" alt="" />
                </div>
                <div className={styles.juice__img}>
                    <img src="/images/juice1.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default GoodFood