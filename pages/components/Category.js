import styles from '../../styles/allStyle/category.module.css'
const Category = () => {
    const active = () => {
        var one = document.getElementById("one");

    }

    return (
        <div className={styles.category__main__div}>
            <div className={styles.category__main__container}>
                <div className={styles.category__box} onClick={active} id="one">
                    <h4>Grocery</h4>
                    <p>20 items available</p>
                    <div className={styles.arrow}></div>
                </div>
                <div className={styles.category__box}>
                </div>
                <div className={styles.category__box}>
                </div>
                <div className={styles.category__box}>
                </div>
                <div className={styles.category__box}>
                </div>
                <div className={styles.category__box}>
                </div>
            </div>
        </div>
    )
}

export default Category