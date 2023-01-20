import React from 'react'
import styles from '../../styles/allStyle/goodFood.module.css'

const BonusImg = () => {
  return (
    <div className={styles.goodFood__main__div}>
    <div className={styles.goodFood__main__container}>
        <div className={styles.juice__img}>
            <img src="/images/bonus.png" alt="" style={{maxWidth:"100%"}}/>
        </div>
    </div>
</div>
  )
}

export default BonusImg