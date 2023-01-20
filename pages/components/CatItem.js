import styles from '../../styles/allStyle/descover.module.css'
import {useState} from 'react'
import items from './cartItem.js'
const CatItem = () => {
  const [product, allProduct] = useState(items);
    return (
        <div className={styles.descover__main__div}>
            <div className={styles.descover__main__container}>
                <div className={styles.cart__item__container}>

                    {
                        product.map((itemVal, index) => {
                            return (
                                <>
                                    <div className={styles.cart__item__card} style={{border:"none"}}>
                                        <div className={styles.cart__item__card__img}>
                                            <img src={itemVal.img} alt="" />
                                        </div>
                                        <div className={styles.cart__item__card__info}>
                                            <p>{itemVal.name}</p>
                                            <div className={styles.price__container}>
                                                <del>{itemVal.price + 100}</del>
                                                <span>{itemVal.price}</span>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default CatItem