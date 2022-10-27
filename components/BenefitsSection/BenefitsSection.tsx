import React, { Component } from "react"
import Image from 'next/image'
import styles from './BenefitsSection.module.css'

export default class CountdownSection extends Component {
  render() {
    return (
      <section className={styles.benefits_section}>
        <div className={styles.benefits_container}>
          <a id={"ecosystem"}></a>
          <h2 className={styles.section_title}>
            Ecosystem
          </h2>
          <div className={styles.benefits_first_block}>
            <div className={styles.benefits_text_container}>
              <div className={styles.benefits_text_block}>
                <div className={styles.benefits_number_container}>
                  <span className={styles.benefits_number}>01</span>
                </div>
                <h3 className={styles.benefits_text_title}>Planetex Token</h3>
                <div>
                  <p className={styles.benefits_text}>
                  PLTEX token is a service token for all our future products. 
                  Among its advantages are low exchange fees, highly profitable 
                  staking, higher referral fees and much more.
                  </p>
                </div>
              </div>
              <div className={`${styles.benefits_text_block} ${styles.benefits_text_block2}`}>
                <div className={styles.benefits_number_container2}>
                  <span className={styles.benefits_number}>02</span>
                </div>
                <h3 className={styles.benefits_text_title}>Planetex NFT</h3>
                <div>
                  <p className={styles.benefits_text}>
                  Our NFT collection is not just pictures. They are the ticket 
                  to our game, which will allow you to enjoy an exciting game 
                  and earn money at the same time. Choose your character and 
                  get ready for a space battle.
                  </p>
                </div>
              </div>
              <div className={`${styles.benefits_text_block} ${styles.benefits_text_block2}`}>
                <div className={styles.benefits_number_container}>
                  <span className={styles.benefits_number}>03</span>
                </div>
                <h3 className={styles.benefits_text_title}>Planetex DEX</h3>
                <div>
                  <p className={styles.benefits_text}>
                  Our DEX exchange will delight you not only with wide 
                  functionality among other exchanges, but also with a 
                  revolutionary algorithm based on AI for the most profitable 
                  and convenient interaction with the platform. Fasten your 
                  seat belts, we&apos;re taking off!
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.benefits_img_container_first}>
              <Image 
                src="/images/Group358221.png"
                width={798}
                height={746}
                alt="Coin"
              />
            </div>
          </div>
          <div className={styles.benefits_second_block}>
            <div className={styles.benefits_img_container_second}>
              <Image 
                src="/images/Group357989.svg"
                // width={725}
                width={896}
                // height={746}
                height={836}
                alt="Coin"
              />
            </div>
            <div className={styles.benefits_text_container}>
              <div className={styles.benefits_text_block}>
                <div className={styles.benefits_number_container2}>
                  <span className={styles.benefits_number}>04</span>
                </div>
                <h3 className={styles.benefits_text_title}>Planetex P2E Game</h3>
                <div>
                  <p className={styles.benefits_text}>
                  Our game will allow you not only to participate in a unique 
                  space battle, but also the opportunity to earn our PLTEX 
                  tokens. The cooler your character is, the more chances you 
                  have to defeat other players. Upgrade your character, learn 
                  new skills, surprise players with your desire to win.
                  </p>
                </div>
              </div>
              <div className={`${styles.benefits_text_block} ${styles.benefits_text_block2}`}>
                <div className={styles.benefits_number_container}>
                  <span className={styles.benefits_number}>05</span>
                </div>
                <h3 className={styles.benefits_text_title}>Planetex Metaverse</h3>
                <div>
                  <p className={styles.benefits_text}>
                  The Planetex Metaverse is an amazing world with no limits. 
                  You will have the opportunity to run your online business 
                  in our metaverse by opening your office or store there. 
                  Explore new planets, build space stations, have fun with 
                  your friends. Ready Player One!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}