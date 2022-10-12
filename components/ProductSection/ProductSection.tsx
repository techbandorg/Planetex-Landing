import React, { Component } from "react"
import Image from 'next/image'
import styles from './ProductSection.module.css'
import ProductSlider from '../ProductSlider/ProductSlider'

export default class ProductSection extends Component {
  render() {
    return (
      <section className={styles.product_section}>
        <div className={styles.product_container}>
          <h2 className={styles.section_title}>
            Product Suite
          </h2>
          <div className={styles.product_content}>
            <div className={styles.product_left_content}>
              <p className={styles.product_left_text}>
                Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                future, Starfish aims to be collaborative, convenient and 
                communal to build our product suites and become the one-stop-shop 
                on Astar Network to provide you with DeFi, NFT-Fi and new project 
                discovery.
              </p>
              <div className={styles.desctop_version}>
                <div className={styles.buy_button}>
                  Buy Token
                </div>
              </div>
            </div>
            <div className={styles.mobile_slider}>
              <ProductSlider />
            </div>
            <div className={styles.mobile_version}>
                <div className={styles.buy_button}>
                  Buy Token
                </div>
              </div>
            <div className={styles.product_right_content}>
              <div className={styles.product_right_item}>
                <div className={styles.product_right_icon}>
                  <Image 
                    src="/images/swap.png"
                    width={55}
                    height={52}
                    alt="Swap icon"
                  />
                </div>
                <p className={styles.product_right_caption}>Swap</p>
              </div>
              <div className={styles.product_right_item}>
                <div className={styles.product_right_icon}>
                  <Image 
                    src="/images/staking.png"
                    width={59}
                    height={56}
                    alt="Staking icon"
                  />
                </div>
                <p className={styles.product_right_caption}>Staking</p>
              </div>
              <div className={styles.product_right_item}>
                <div className={styles.product_right_icon}>
                  <Image 
                    src="/images/trading.png"
                    width={49}
                    height={49}
                    alt="Trading icon"
                  />
                </div>
                <p className={styles.product_right_caption}>Trading</p>
              </div>
              <div className={styles.product_right_item}>
                <div className={styles.product_right_icon}>
                  <Image 
                    src="/images/launchpad.png"
                    width={52}
                    height={52}
                    alt="Launchpad icon"
                  />
                </div>
                <p className={styles.product_right_caption}>Launchpad</p>
              </div>
              <div className={styles.product_right_item}>
                <div className={styles.product_right_icon}>
                  <Image 
                    src="/images/swap.png"
                    width={55}
                    height={52}
                    alt="Swap icon"
                  />
                </div>
                <p className={styles.product_right_caption}>Swap</p>
              </div>
              <div className={styles.product_right_item}>
                <div className={styles.product_right_icon}>
                  <Image 
                    src="/images/staking.png"
                    width={59}
                    height={56}
                    alt="Staking icon"
                  />
                </div>
                <p className={styles.product_right_caption}>Staking</p>
              </div>
              <div className={styles.product_right_item}>
                <div className={styles.product_right_icon}>
                  <Image 
                    src="/images/trading.png"
                    width={49}
                    height={49}
                    alt="Trading icon"
                  />
                </div>
                <p className={styles.product_right_caption}>Trading</p>
              </div>
              <div className={styles.product_right_item}>
                <div className={styles.product_right_icon}>
                  <Image 
                    src="/images/launchpad.png"
                    width={52}
                    height={52}
                    alt="Launchpad icon"
                  />
                </div>
                <p className={styles.product_right_caption}>Launchpad</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}