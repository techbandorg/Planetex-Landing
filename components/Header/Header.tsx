import React, { 
  useState
} from "react"
import Image from 'next/image'
import styles from './Header.module.css'
import { JoinIDO_1 } from '../buttons/buttons'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItemHandler = (event: React.MouseEvent): void => {
    const target = event.target as HTMLButtonElement;
    const body: HTMLElement | null = document.querySelector("body");
    let nodeObj: HTMLElement | null;

    if (body) {
      body.classList.remove("menu-open");
    }

    setIsMenuOpen(false);

    if (target.dataset.name) {
      nodeObj = document.getElementById(target.dataset.name);
      console.log(nodeObj);
      if (nodeObj) {
        nodeObj.scrollIntoView({block: "start", behavior: "smooth"});
      }
    }
  }

  const displayMobileMenu = (): void => {
    const body: HTMLElement | null = document.querySelector("body");
    if ( isMenuOpen && body ) {
      body.classList.remove("menu-open");
    } else if ( body ) {
      body.classList.add("menu-open");
    }
    setIsMenuOpen(!isMenuOpen);
  }

  const handleBurgerMenuClick = ( event: React.MouseEvent<HTMLElement> ): void => {
    event.preventDefault();
    displayMobileMenu();
  }

  return (
    <header className={styles.header}>
      <a id={"header"}></a>
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
              <a className={styles.join_ido_button} href="https://planetexapp.vercel.app/presale" target="blank">
                <JoinIDO_1 />
              </a>
            </div>
          </div>
          <div className={styles.menu}>
            <div 
              className={styles.gamburger_menu}
              onClick={handleBurgerMenuClick}
            >
              <div className={
                `${styles.menu_line} ${styles.first_line} ${isMenuOpen ? 
                  styles.first_line_active : styles.first_line}`
              }></div>
              <div className={
                `${styles.menu_line} ${styles.second_line} ${isMenuOpen ? 
                  styles.second_line_active : styles.second_line}`
              }></div>
              <div className={
                `${styles.menu_line} ${styles.third_line} ${isMenuOpen ? 
                  styles.third_line_active : styles.third_line}`
              }></div>
              <div className={
                `${styles.menu_line} ${styles.fourth_line} ${isMenuOpen ? 
                  styles.fourth_line_active : styles.fourth_line}`
              }></div>
            </div>
          </div>
        </div>
        <div className={
          `${styles.header_nav_wrapper} ${isMenuOpen ? 
            styles.header__navwrapper_active : styles.header_nav_wrapper}`
        }>
          <nav className={styles.main_nav}>
            <ul className={styles.main_nav_ul}>
              <li className={styles.main_nav_li}>
                <a href="#ecosystem"
                  onClick={menuItemHandler} 
                  className={styles.main_nav_a}
                  data-name={"ecosystem"}
                >
                  Ecosystem
                </a>
              </li>
              <li className={styles.main_nav_li}>
                <a href="#productSection"
                  onClick={menuItemHandler} 
                  className={styles.main_nav_a}
                  data-name={"productSection"}
                >
                  DEX
                </a>
              </li>
              <li className={styles.main_nav_li}>
                <a href="#P2Egame"
                  onClick={menuItemHandler}
                  className={styles.main_nav_a}
                  data-name={"P2Egame"}
                >
                  P2E Game
                </a>
              </li>
              <li className={styles.main_nav_li}>
                <a href="#roadmap"
                  onClick={menuItemHandler}
                  className={styles.main_nav_a}
                  data-name={"roadmap"}
                >
                  Roadmap
                </a>
              </li>
              <li className={styles.main_nav_li}>
                <a href="#tokenomics"
                  onClick={menuItemHandler}
                  className={styles.main_nav_a}
                  data-name={"tokenomics"}
                >
                  Tokenomics
                </a>
              </li>
              <li className={styles.main_nav_li}>
                <a href="#theTeam"
                  onClick={menuItemHandler}
                  className={styles.main_nav_a}
                  data-name={"theTeam"}
                >
                  The Team
                </a>
              </li>
              <li className={styles.main_nav_li}>
                <a href="#saleDetails"
                  onClick={menuItemHandler} 
                  className={styles.main_nav_a}
                  data-name={"saleDetails"}
                >
                  Sale Details
                </a>
              </li>
              <li className={styles.main_nav_li}>
                <div className={styles.header_join_button_container}>
                  <a className={styles.join_ido_button} href="https://planetexapp.vercel.app/presale" target="blank">
                    <JoinIDO_1 />
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

