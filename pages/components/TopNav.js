import React from 'react'
import styles from '../../styles/allStyle/topNav.module.css'
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineAssignmentReturn } from 'react-icons/md';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitter,BsPinterest,BsFacebook } from 'react-icons/bs';

const TopNav = () => {
    return (
        <div className={styles.topNav__div}>
            <div className={styles.features__text}>
                <div className={styles.features}>
                    <TbTruckDelivery />Free Delivery
                </div>
                <div className={styles.features}>
                    <MdOutlineAssignmentReturn/>Delivery Policies
                </div>
                <div className={styles.features}>
                    Follow us <AiOutlineInstagram/> <BsTwitter/><BsPinterest/><BsFacebook/>
                </div>
            </div>

            <div className={styles.login__btn}>
                <span>Login</span>
            </div>
        </div>
    )
}

export default TopNav