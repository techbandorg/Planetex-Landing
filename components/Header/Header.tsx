import React, { 
  useState
} from "react"
import Image from 'next/image'
import styles from './Header.module.css'
import { JoinIDO_1 } from '../buttons/buttons'


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function displayMobileMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleBurgerMenuClick(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    displayMobileMenu();
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.logo_container}>
          <Image 
            src="/images/logo.svg"
            height={28}
            width={164}
            alt="Plantex logo"
          />
        </div>
        <div className={styles.header_right}>
          <div className={styles.header_join_button_container_tablet}>
            <div className={styles.header_join_button_container}>
              <JoinIDO_1 />
            </div>
          </div>
          <div className={styles.menu}>
            <div 
              className={styles.gamburger_menu}
              onClick={handleBurgerMenuClick}
            >
              <div className={
                `${styles.menu_line} ${styles.first_line} ${isMenuOpen ? styles.first_line_active : styles.first_line}`
              }></div>
              <div className={
                `${styles.menu_line} ${styles.second_line} ${isMenuOpen ? styles.second_line_active : styles.second_line}`
              }></div>
              <div className={
                `${styles.menu_line} ${styles.third_line} ${isMenuOpen ? styles.third_line_active : styles.third_line}`
              }></div>
              <div className={
                `${styles.menu_line} ${styles.fourth_line} ${isMenuOpen ? styles.fourth_line_active : styles.fourth_line}`
              }></div>
            </div>
          </div>
        </div>
        <div className={styles.header_nav_wrapper}>
          <nav className={styles.main_nav}>
            <ul className={styles.main_nav_ul}>
              <li className={styles.main_nav_li}><a href="" className={styles.main_nav_a}>Ecosystem</a></li>
              <li className={styles.main_nav_li}><a href="" className={styles.main_nav_a}>DEX</a></li>
              <li className={styles.main_nav_li}><a href="" className={styles.main_nav_a}>P2E Game</a></li>
              <li className={styles.main_nav_li}><a href="" className={styles.main_nav_a}>Roadmap</a></li>
              <li className={styles.main_nav_li}><a href="" className={styles.main_nav_a}>Tokenomics</a></li>
              <li className={styles.main_nav_li}><a href="" className={styles.main_nav_a}>The Team</a></li>
              <li><a href="" className={styles.main_nav_a}>Sale Details</a></li>
            </ul>
          </nav>
          <div className={styles.header_join_button_container}>
            <JoinIDO_1 />
          </div>
        </div>
      </div>
    </header>
  );
}

