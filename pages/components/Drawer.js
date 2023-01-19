import styles from '../../styles/allStyle/drawer.module.css'
import Link from 'next/link'
const Drawer = () => {

  const cut = () => {
    var sideNav = document.getElementById("sideNav")
    sideNav.style.width = "0"
  }


  return (
    <div className={styles.sideNav__mainDiv} id='sideNav'>
      <div className={styles.cut__btn}><button onClick={cut}>X</button></div>
      <div className={styles.nav__links}>
        <p style={{ color: "#6aadfe", fontFamily: "fantasy" }}>Menu</p>

        <div className={styles.link}>
          <li><Link href="">Home</Link></li>
        </div>
      </div>
    </div>
  )
}

export default Drawer