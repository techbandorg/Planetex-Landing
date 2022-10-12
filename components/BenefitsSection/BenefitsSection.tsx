import React, { Component } from "react"
import Image from 'next/image'
import styles from './BenefitsSection.module.css'

export default class CountdownSection extends Component {
  render() {
    return (
      <section className={styles.benefits_section}>
        <div className={styles.benefits_container}>
          <h2 className={styles.section_title}>
            Business model
          </h2>
          <div className={styles.benefits_first_block}>
            <div className={styles.benefits_text_container}>
              <div className={styles.benefits_text_block}>
                <div className={styles.benefits_number_container}>
                  <span className={styles.benefits_number}>01</span>
                </div>
                <h3 className={styles.benefits_text_title}>NFT</h3>
                <div>
                  <p className={styles.benefits_text}>
                  Trading on Planetex is quite simple and requires only signing 
                  up for a Planetex account and wallet creation. Keep track of 
                  your orders in real time with in depth market analysis. 
                  Increase your chance of winning your open contracts. We 
                  provided with you all the tools you need.
                  </p>
                </div>
              </div>
              <div className={`${styles.benefits_text_block} ${styles.benefits_text_block2}`}>
                <div className={styles.benefits_number_container2}>
                  <span className={styles.benefits_number}>02</span>
                </div>
                <h3 className={styles.benefits_text_title}>Staking</h3>
                <div>
                  <p className={styles.benefits_text}>
                  Trading on Planetex is quite simple and requires only signing 
                  up for a Planetex account and wallet creation. Keep track of 
                  your orders in real time with in depth market analysis. 
                  Increase your chance of winning your open contracts. We 
                  provided with you all the tools you need.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.benefits_img_container}>
              <Image 
                src="/images/Group357965.png"
                width={725}
                height={746}
                alt="Coin"
              />
            </div>
          </div>
          <div className={styles.benefits_second_block}>
            <div className={styles.benefits_img_container}>
              <Image 
                src="/images/Group357989.png"
                width={725}
                height={746}
                alt="Coin"
              />
            </div>
            <div className={styles.benefits_text_container}>
              <div className={styles.benefits_text_block}>
                <div className={styles.benefits_number_container}>
                  <span className={styles.benefits_number}>03</span>
                </div>
                <h3 className={styles.benefits_text_title}>Trading</h3>
                <div>
                  <p className={styles.benefits_text}>
                    Trading on Planetex is quite simple and requires only 
                    signing up for a Planetex account and wallet creation. 
                    Keep track of your orders in real time with in depth 
                    market analysis. Increase your chance of winning your 
                    open contracts. We provided with you all the tools you 
                    need.
                  </p>
                </div>
              </div>
              <div className={`${styles.benefits_text_block} ${styles.benefits_text_block2}`}>
                <div className={styles.benefits_number_container2}>
                  <span className={styles.benefits_number}>04</span>
                </div>
                <h3 className={styles.benefits_text_title}>Trading</h3>
                <div>
                  <p className={styles.benefits_text}>
                    Trading on Planetex is quite simple and requires only 
                    signing up for a Planetex account and wallet creation. 
                    Keep track of your orders in real time with in depth 
                    market analysis. Increase your chance of winning your 
                    open contracts. We provided with you all the tools you 
                    need.
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