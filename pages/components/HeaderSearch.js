import styles from '../../styles/allStyle/headerSearch.module.css'
import { FiHeart } from 'react-icons/fi';
import { BsHandbag } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import { HiMenu } from 'react-icons/hi';

const HeaderSearch = () => {
    return (
        <div className={styles.main__headerSearch__div}>
            <div className={styles.header__logo}>
                <img src='https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2020/07/Logo.png' />
            </div>
            <div className={styles.search__input__container}>
                <div className={styles.search__box}>
                    <input className={styles.search_input} placeholder="Find your product" />
                </div>
                <select name="cars" id="cars" className={styles.select_input}>
                    <option value="volvo">beuty</option>
                    <option value="saab">All Category</option>
                    <option value="opel">grocery</option>
                    <option value="audi">Nuts</option>
                </select>
                <div className={styles.search__btn}>
                    <GoSearch />
                </div>
            </div>
            <div className={styles.menue__btn}>
                <HiMenu />
            </div>
            <div className={styles.cart_and_like}>
                <div>
                    <div className={styles.count}>5</div>
                    <FiHeart />
                </div>
                <div>
                    <div className={styles.catrt_count}>7</div>
                    <BsHandbag />
                </div>
            </div>
        </div>
    )
}

export default HeaderSearch