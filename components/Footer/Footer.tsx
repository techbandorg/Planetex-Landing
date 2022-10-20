import React, { Component } from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.footer_tothetop}>
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
      </footer>
    );
  }
}


