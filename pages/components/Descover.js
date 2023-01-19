import styles from '../../styles/allStyle/descover.module.css'
import items from './cartItem';
import {useState} from 'react'
const Descover = () => {
  const [product, allProduct] = useState(items);
  console.log(product)
  return (
    <>
      <div className={styles.descover__main__div}>
        <div className={styles.descover__main__container}>
          <div className={styles.descover__main__nav}>
            <div><h5>Descover More</h5></div>
            <div>
              <li>On Sale</li>
              <li>Hote Sale</li>
              <li>Trend</li>
              <li>Best Sale</li>
            </div>
          </div>
          <div className={styles.cart__item__container}>

          {
            product.map((itemVal, index) => {
              return (
                <>

                    <div className={styles.cart__item__card}>
                      <div className={styles.cart__item__card__img}>
                        <img src={itemVal.img} alt="" />
                      </div>
                      <div className={styles.cart__item__card__info}>
                        <p>{itemVal.name}</p>
                        <div className={styles.price__container}>
                          <del>{itemVal.price+100}</del>
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
    </>
  )
}

export default Descover