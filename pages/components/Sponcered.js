import styles from '../../styles/allStyle/sponcered.module.css'

const Sponcered = () => {
    return (
        <>

            <div className={styles.sponcered__main__div}>
                <div className={styles.sponcered__main__container}>
                    <div className={styles.sponcered__img}>
                        <img src="images/sponsors_1.png" alt="" />
                    </div>
                    <div className={styles.sponcered__img}>
                        <img src="images/sponsors_2.png" alt="" />
                    </div>
                    <div className={styles.sponcered__img}>
                        <img src="images/sponsors_3.png" alt="" />
                    </div>
                    <div className={styles.sponcered__img}>
                        <img src="images/sponsors_4.png" alt="" />
                    </div>
                    <div className={styles.sponcered__img}>
                        <img src="images/sponsors_5.png" alt="" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Sponcered