import React from 'react'
import styles from '../../styles/allStyle/about.module.css'
const About = () => {
    return (
        <div className={styles.about__main__div}>
            <div className={styles.about__container}>
                <div className={styles.about__text__container}>
                    <div className={styles.about__history__text}>
                        <h1>HISTORY</h1>
                        <h2>Creative and renovate fashion trends</h2>
                        <p>Collaboratively administrate empowered markets via plug-and-play maintain networks. Dynamically usable procrastinate B2B users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                        <div className={styles.client__container}>
                            <div className={styles.happy__client}>
                                <h4>12</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className={styles.happy__client}>
                                <h4>12k</h4>
                                <p>Happy Customers</p>
                            </div>
                            <div className={styles.happy__client}>
                                <h4>100%</h4>
                                <p>Clients Satisfaction</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.about__history__img}>
                        <img src='https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2020/07/about_us_img_11.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About