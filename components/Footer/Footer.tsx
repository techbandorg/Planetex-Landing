import React, { Component } from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'
import { JoinIDO_1 } from '../buttons/buttons'

export default function Footer() {
  const menuItemHandler = (event: React.MouseEvent): void => {
    event.preventDefault();

    const target = event.target as HTMLButtonElement;
    const body: HTMLElement | null = document.querySelector("body");
    let nodeObj: HTMLElement | null;

    if (body) {
      body.classList.remove("menu-open");
    }

    if (target.dataset.name) {
      nodeObj = document.getElementById(target.dataset.name);
      if (nodeObj) {
        nodeObj.scrollIntoView({block: "start", behavior: "smooth"});
      }
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_topHalf}>
          <div className={styles.footer_tothetop}>
            <a href="#header">
              <div className={styles.footer_tothetop_button}>
                  <div className={styles.footer_tothetop_button_arrow}>
                    <Image 
                      src="/images/toTopArrow.svg"
                      width={'100%'}
                      height={'100%'}
                      alt="To top arrow"
                    />
                  </div>
              </div>
            </a>
          </div>
          <div className={styles.footer_socials_wrapper}>
            <div  className={styles.footer_socials}>
              <a href="https://www.facebook.com/Planetexio" 
                rel="noreferrer" 
                target="_blank"
                className={styles.footer_social_link}
              >
                <Image 
                  src="/images/facebookIcon.svg"
                  width={32}
                  height={32}
                  alt="Facebook icon"
                />
              </a>
              <a href="https://twitter.com/planetex_io" 
                rel="noreferrer" 
                target="_blank"
                className={styles.footer_social_link}
              >
                <Image 
                  src="/images/twitterIcon.svg"
                  width={32}
                  height={32}
                  alt="Twitter icon"
                />
              </a>
              <a href="https://www.instagram.com/planetex_io/" 
                rel="noreferrer" 
                target="_blank"
                className={styles.footer_social_link}
              >
                <Image 
                  src="/images/instagramIcon.svg"
                  width={32}
                  height={32}
                  alt="Instagram icon"
                />
              </a>
              
              <Image 
                src="/images/youtubeIcon.svg"
                width={32}
                height={32}
                alt="Youtube icon"
              />
              <a href="https://t.me/planetexofficial" 
                rel="noreferrer" 
                target="_blank"
                className={styles.footer_social_link}
              >
                <Image 
                  src="/images/telegramIcon.svg"
                  width={32}
                  height={32}
                  alt="Telegram icon"
                />
              </a>
              {/* <a href="https://discord.gg/planetex.io" 
                rel="noreferrer" 
                target="_blank"
                className={styles.footer_social_link}
              > */}
                <Image 
                  src="/images/discordIcon.svg"
                  width={32}
                  height={32}
                  alt="Discord icon"
                />
              {/* </a> */}
              <a href="https://www.reddit.com/user/planetex_io" 
                rel="noreferrer" 
                target="_blank"
                className={styles.footer_social_link}
              >
                <Image 
                  src="/images/redditIcon.svg"
                  width={32}
                  height={32}
                  alt="Reddit icon"
                />
              </a>
              <a href="https://medium.com/@planetex" 
                rel="noreferrer" 
                target="_blank"
                className={styles.footer_social_link}
              >
                <Image 
                  src="/images/mediumIcon.svg"
                  width={32}
                  height={32}
                  alt="Medium icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.foter_nav_container}>
          <div className={styles.logo_container}>
            <Image 
              src="/images/logo.png"
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
                    onClick={menuItemHandler} 
                    className={styles.footer_nav_a}
                    data-name={"ecosystem"}
                  >
                    Ecosystem
                  </a>
                </li>
                <li className={styles.footer_nav_li}>
                  <a href="#productSection"
                    onClick={menuItemHandler} 
                    className={styles.footer_nav_a}
                    data-name={"productSection"}
                  >
                    DEX
                  </a>
                </li>
                <li className={styles.footer_nav_li}>
                  <a href="#P2Egame"
                    onClick={menuItemHandler}
                    className={styles.footer_nav_a}
                    data-name={"P2Egame"}
                  >
                    P2E Game
                  </a>
                </li>
                <li className={styles.footer_nav_li}>
                  <a href="#roadmap"
                    onClick={menuItemHandler}
                    className={styles.footer_nav_a}
                    data-name={"roadmap"}
                  >
                    Roadmap
                  </a>
                </li>
                <li className={styles.footer_nav_li}>
                  <a href="#tokenomics"
                    onClick={menuItemHandler}
                    className={styles.footer_nav_a}
                    data-name={"tokenomics"}
                  >
                    Tokenomics
                  </a>
                </li>
                {/* <li className={styles.footer_nav_li}>
                  <a href="#theTeam"
                    //onClick={menuItemHandler}
                    className={styles.footer_nav_a}
                    data-name={"theTeam"}
                  >
                    The Team
                  </a>
                </li> */}
                <li className={styles.footer_nav_li}>
                  <a href="#saleDetails"
                    onClick={menuItemHandler} 
                    className={styles.footer_nav_a}
                    data-name={"saleDetails"}
                  >
                    Sale Details
                  </a>
                </li>
                <li className={styles.footer_nav_li}>
                  <a href="#mintNFT"
                    onClick={menuItemHandler} 
                    className={styles.footer_nav_a}
                    data-name={"mintNFT"}
                  >
                    Mint NFT
                  </a>
                </li>
                <li className={styles.footer_nav_li}></li>
              </ul>
            </nav>
            <a className={styles.join_ido_button} href="https://app.planetex.io/presale" target="blank">
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


