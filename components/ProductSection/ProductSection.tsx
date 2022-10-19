import React, { Component } from "react"
import Image from 'next/image'
import { Buy_Button_1 } from '../buttons/buttons'
import styles from './ProductSection.module.css'
import ProductSlider from '../ProductSlider/ProductSlider'

export default class ProductSection extends Component {
  render() {
    return (
      <section className={styles.product_section}>
        <a id={"productSection"} name={"productSection"}></a>
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
            Enjoy DEX Functionality
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
            <div className={styles.tablet_version}>
              <Buy_Button_1 />
            </div>
          </div>
        </div>
      </section>
    );
  }
}