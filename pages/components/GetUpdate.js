import styles from '../../styles/allStyle/getUpdate.module.css'

const GetUpdate = () => {
    return (
        <>
            <div className={styles.getUpdate__main__div}>
                <div className={styles.getUpdate__main__container}>
                    <div className={styles.newsletter__box}>
                        <h3>Newsletter & Get Updates</h3>
                        <p>Sign up for our newsletter to get up-to-date from us</p>
                    </div>

                    <div className={styles.mail__submit__box}>
                        <div className={styles.mail__input}>
                            <input type="email" placeholder='Enter your email...'/>
                            <button>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetUpdate