import { useState } from 'react'
import styles from '../../styles/allStyle/marketPlace.module.css'
import { IoTimeOutline } from 'react-icons/io';
import { BiCommentDots } from 'react-icons/bi';
import news from './news'
const MarketPlace = () => {
    const [allNews, setNews] = useState(news)
    console.log(allNews);
    return (
        <>
            <div className={styles.marketPlace__main__div}>
                <div className={styles.marketPlace__main__container}>

                    {
                        allNews.map((val, index) => {
                            return (
                                <>
                                    <div className={styles.card}>
                                        <div className={styles.card__img}>
                                            <img src={val.img} alt={val.category} />
                                        </div>
                                        <div className={styles.card__info__text}>
                                            <span style={{ color: "#0063d1", fontWeight: "500",textTransform:"capitalize" }}>{val.category}</span>
                                            <h3>{val.discription}</h3>
                                            <div className={styles.comment__container}>
                                                <div className={styles.comment__response}>
                                                    <h5>💬</h5>
                                                    <p>{val.comment}</p>
                                                </div>

                                                <div className={styles.comment__response}>
                                                    <h5>⌚</h5>
                                                    <p>{val.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }




                </div>
            </div>
        </>
    )
}

export default MarketPlace