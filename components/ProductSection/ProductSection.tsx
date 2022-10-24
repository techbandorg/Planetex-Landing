import React, { Component } from "react"
import Image from 'next/image'
import { Buy_Button_1 } from '../buttons/buttons'
import styles from './ProductSection.module.css'
import ProductSlider from '../ProductSlider/ProductSlider'

export default class ProductSection extends Component {
  render() {
    return (
      <section className={styles.product_section}>
        <div className={styles.product_background}>
          <Image 
            src="/images/productSectionBG.svg"
            width={2541}
            height={1899}
            alt="Product section background"
          />
        </div>
        <div className={styles.product_container}>
          <h2 className={styles.section_title}>
            Enjoy DEX Functionality <a id={"productSection"}></a>
          </h2>
          <div className={styles.product_content}>
            <div className={styles.product_left_content}>
              <p className={styles.product_left_text}>
              Our dex exchange will compete even with top exchanges. Wide 
              functionality along with an innovative artificial intelligence 
              algorithm will not leave anyone indifferent.
              </p>
              <div className={styles.desctop_version}>
                <Buy_Button_1 />
              </div>
            </div>
            <div className={styles.mobile_slider}>
              <ProductSlider />
            </div>
            <div className={styles.mobile_version}>
              <Buy_Button_1 />
              </div>
            <div className={styles.product_right_content}>
              <div className={styles.product_right_item}>
                <div className={styles.product_right_icon}>
                  <Image 
                    src="/images/swap.svg"
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
                    src="/images/staking.svg"
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
                    src="/images/poolsFarms.svg"
                    width={49}
                    height={49}
                    alt="Pools and Farms icon"
                  />
                </div>
                <p className={styles.product_right_caption}>Pools&Farms</p>
              </div>
              <div className={styles.product_right_item}>
                <div className={styles.product_right_icon}>
                  <Image 
                    src="/images/governance.svg"
                    width={52}
                    height={52}
                    alt="Governance icon"
                  />
                </div>
                <p className={styles.product_right_caption}>Governance</p>
              </div>
              <div className={styles.product_right_item}>
                <div className={styles.product_right_icon}>
                  <Image 
                    src="/images/marketplace.svg"
                    width={55}
                    height={52}
                    alt="Marketplace icon"
                  />
                </div>
                <p className={styles.product_right_caption}>Marketplace</p>
              </div>
              <div className={styles.product_right_item}>
                <div className={styles.product_right_icon}>
                  <Image 
                    src="/images/lottery.svg"
                    width={59}
                    height={56}
                    alt="Lottery icon"
                  />
                </div>
                <p className={styles.product_right_caption}>Lottery</p>
              </div>
              <div className={styles.product_right_item}>
                <div className={styles.product_right_icon}>
                  <Image 
                    src="/images/bridge.svg"
                    width={49}
                    height={49}
                    alt="Bridge icon"
                  />
                </div>
                <p className={styles.product_right_caption}>Bridge</p>
              </div>
              <div className={styles.product_right_item}>
                <div className={styles.product_right_icon}>
                  <Image 
                    src="/images/launchpad.svg"
                    width={52}
                    height={52}
                    alt="Launchpad icon"
                  />
                </div>
                <p className={styles.product_right_caption}>Launchpad</p>
              </div>
            </div>
            <div className={styles.tablet_version}>
              <Buy_Button_1 />
            </div>
          </div>
        </div>
      </section>
    );
  }
}