import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import styles from './ProductSlider.module.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class ProductSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      arrows: false,
      variableWidth: true
    };
    return (
      <div className={styles.product_slider_container_mobile}>
        <Slider {...settings}>
          <div className={styles.product_right_item_mobile} style={{"width": "220px", "height": "178px"}}>
            <div className={styles.product_right_item_content} style={{"width": "195px", "height": "178px"}}>
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
          </div>
          <div className={styles.product_right_item_mobile} style={{"width": "220px", "height": "178px"}}>
            <div className={styles.product_right_item_content} style={{"width": "195px", "height": "178px"}}>
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
          </div>
          <div className={styles.product_right_item_mobile} style={{"width": "220px", "height": "178px"}}>
            <div className={styles.product_right_item_content} style={{"width": "195px", "height": "178px"}}>
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
          </div>
          <div className={styles.product_right_item_mobile} style={{"width": "220px", "height": "178px"}}>
            <div className={styles.product_right_item_content} style={{"width": "195px", "height": "178px"}}>
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
          </div>
          <div className={styles.product_right_item_mobile} style={{"width": "220px", "height": "178px"}}>
            <div className={styles.product_right_item_content} style={{"width": "195px", "height": "178px"}}>
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
          </div>
          <div className={styles.product_right_item_mobile} style={{"width": "220px", "height": "178px"}}>
            <div className={styles.product_right_item_content} style={{"width": "195px", "height": "178px"}}>
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
          </div>
          <div className={styles.product_right_item_mobile} style={{"width": "220px", "height": "178px"}}>
            <div className={styles.product_right_item_content} style={{"width": "195px", "height": "178px"}}>
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
          </div>
          <div className={styles.product_right_item_mobile} style={{"width": "220px", "height": "178px"}}>
            <div className={styles.product_right_item_content} style={{"width": "195px", "height": "178px"}}>
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
        </Slider>
      </div>
    );
  }
}
