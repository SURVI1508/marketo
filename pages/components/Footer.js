import styles from '../../styles/allStyle/footer.module.css'
import { GoLocation } from 'react-icons/go';
import { BsArrowRight } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            <div className={styles.footer__mainDiv}>
                {/* <Navbar/> */}
                <div className={styles.footer__container}>
                    <div className={styles.links__container}>
                        <div className={styles.contactUs__container}>
                            <div className={styles.header__logo}>
                                <img src='https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2020/07/Logo.png' />
                            </div><br /><br />
                            <p><a href="" style={{ color: "gray", fontSize: "1.5rem", fontWeight: "300" }}>Got Question? Call us 24/7</a> <br /><h5>[80] 1017 197</h5></p>
                            <p style={{ fontStyle: "italic", fontWeight: "500", color: "gray" }}>17 Princess Road, London, Greater London <br /> NW1 8JR, UK</p>
                            <button className={styles.map__btn}><span style={{fontSize:"1rem"}}> <GoLocation /></span>View On Map</button>
                        </div>
                        <div className={styles.contactUs__container}>
                            <h5>We Using Safe Payments</h5><br /><br />
                            <p><a href="">Secured by:</a></p>

                        </div>
                        <div className={styles.contactUs__container}>
                            <h5>Quick Link</h5><br />
                            <p><a href="">Support Center</a></p>
                            <p><a href="">Term & Condition</a></p>
                            <p><a href="">Shipping</a></p>
                            <p><a href="">Privecy Polecey</a></p>
                            <p><a href="">Help</a></p>
                            <p><a href="">Product Return</a></p>

                        </div>
                        <div className={styles.contactUs__container}>
                            <h5>Our Stores</h5><br />
                            <p><a href="">Newyork</a></p>
                            <p><a href="">London</a></p>
                            <p><a href="">Jharkhand</a></p>
                            <p><a href="">Kashmir</a></p>
                            <p><a href="">Dargling</a></p>
                            <p><a href="">Asam</a></p>

                        </div>
                        <div className={styles.contactUs__container} style={{ justifyContent: "center",alignItems:"flex-end", width: "auto" }}>
                            <button className={styles.goTop__btn}>BACK TOP <span style={{fontSize:"1rem"}}><BsArrowRight /></span> </button>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright__container}>
                    All Rights Reserved ©Copyright 2018 by XpeedStudio
                </div>
            </div>
        </>
    )
}

export default Footer