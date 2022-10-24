import React, { Component } from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'
import { JoinIDO_1 } from '../buttons/buttons'

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.footer_topHalf}>
            <div className={styles.footer_tothetop}>
              <div className={styles.footer_tothetop_button}>
                <a href="#header">
                  <div className={styles.footer_tothetop_button_arrow}>
                    <Image 
                      src="/images/toTopArrow.svg"
                      width={'100%'}
                      height={'100%'}
                      alt="To top arrow"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.footer_socials_wrapper}>
              <div className={styles.footer_socials}>
                <Image 
                  src="/images/facebookIcon.svg"
                  width={32}
                  height={32}
                  alt="Facebook icon"
                />
                <Image 
                  src="/images/twitterIcon.svg"
                  width={32}
                  height={32}
                  alt="Twitter icon"
                />
                <Image 
                  src="/images/instagramIcon.svg"
                  width={32}
                  height={32}
                  alt="Instagram icon"
                />
                <Image 
                  src="/images/youtubeIcon.svg"
                  width={32}
                  height={32}
                  alt="Youtube icon"
                />
                <Image 
                  src="/images/telegramIcon.svg"
                  width={32}
                  height={32}
                  alt="Telegram icon"
                />
                <Image 
                  src="/images/discordIcon.svg"
                  width={32}
                  height={32}
                  alt="Discord icon"
                />
              </div>
            </div>
          </div>
          <div className={styles.foter_nav_container}>
            <div className={styles.logo_container}>
              <Image 
                src="/images/logo.svg"
                height={28}
                width={164}
                alt="Plantex logo"
              />
            </div>
            <div className={styles.footer_nav_links}>
              <nav className={styles.footer_nav}>
                <ul className={styles.footer_nav_ul}>
                  <li className={styles.footer_nav_li}>
                    <a href="#ecosystem"
                      //onClick={menuItemHandler} 
                      className={styles.footer_nav_a}
                      data-name={"ecosystem"}
                    >
                      Ecosystem
                    </a>
                  </li>
                  <li className={styles.footer_nav_li}>
                    <a href="#productSection"
                      //onClick={menuItemHandler} 
                      className={styles.footer_nav_a}
                      data-name={"productSection"}
                    >
                      DEX
                    </a>
                  </li>
                  <li className={styles.footer_nav_li}>
                    <a href="#P2Egame"
                      //onClick={menuItemHandler}
                      className={styles.footer_nav_a}
                      data-name={"P2Egame"}
                    >
                      P2E Game
                    </a>
                  </li>
                  <li className={styles.footer_nav_li}>
                    <a href="#roadmap"
                      //onClick={menuItemHandler}
                      className={styles.footer_nav_a}
                      data-name={"roadmap"}
                    >
                      Roadmap
                    </a>
                  </li>
                  <li className={styles.footer_nav_li}>
                    <a href="#tokenomics"
                      //onClick={menuItemHandler}
                      className={styles.footer_nav_a}
                      data-name={"tokenomics"}
                    >
                      Tokenomics
                    </a>
                  </li>
                  <li className={styles.footer_nav_li}>
                    <a href="#theTeam"
                      //onClick={menuItemHandler}
                      className={styles.footer_nav_a}
                      data-name={"theTeam"}
                    >
                      The Team
                    </a>
                  </li>
                  <li className={styles.footer_nav_li}>
                    <a href="#saleDetails"
                      //onClick={menuItemHandler} 
                      className={styles.footer_nav_a}
                      data-name={"saleDetails"}
                    >
                      Sale Details
                    </a>
                  </li>
                  <li className={styles.footer_nav_li}>
                    
                  </li>
                </ul>
              </nav>
              <a className={styles.join_ido_button} href="https://planetexapp.vercel.app/presale" target="blank">
                <div className={styles.header_join_button_container}>
                  <JoinIDO_1 />
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}


