import styles from '../../styles/allStyle/ternding.module.css'
import { FiHeart } from 'react-icons/fi';
import { useState } from 'react';
import items from './cartItem'
const TrendingItem = () => {
    const [product, allProduct] = useState(items);

    return (
        <>
            <div className={styles.trending__main__div}>
                <div className={styles.trending__main__container}>
                    <div className={styles.trending__main__nav}>
                        <div><h5>Descover More</h5></div>
                        <div>
                            <li>On Sale</li>
                            <li>Hote Sale</li>
                            <li>Trend</li>
                            <li>Best Sale</li>
                        </div>
                    </div>
                    <div className={styles.trending__item__container}>
                        {
                            product.slice(0,4).map((itemVal,index) => {
                                return (
                                    <>
                                        <div className={styles.trending__item__card}>
                                            <div className={styles.like__item}>
                                                <FiHeart />
                                            </div>
                                            <div className={styles.trending__item__card__img}>
                                                <img src={itemVal.img} alt="" />
                                            </div>
                                            <div className={styles.trending__item__card__info}>
                                                <span style={{ fontWeight: "500", color: "gray", fontSize: "0.8rem" }}>{itemVal.name}</span>
                                                <p style={{ fontWeight: "500", fontSize: "1.1rem" }}>{itemVal.para}</p>
                                                <div className={styles.trending__price__container}>
                                                    <del>{itemVal.price+100}</del>
                                                    <span>{itemVal.price}</span>
                                                </div>
                                            </div>
                                            <div className={styles.addto__cart}>
                                                Add to cart
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingItem