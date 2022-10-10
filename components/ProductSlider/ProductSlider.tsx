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
                  src="/images/swap.png"
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
                  src="/images/staking.png"
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
                  src="/images/trading.png"
                  width={49}
                  height={49}
                  alt="Trading icon"
                />
              </div>
              <p className={styles.product_right_caption}>Trading</p>
            </div>
          </div>
          <div className={styles.product_right_item_mobile} style={{"width": "220px", "height": "178px"}}>
            <div className={styles.product_right_item_content} style={{"width": "195px", "height": "178px"}}>
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
          <div className={styles.product_right_item_mobile} style={{"width": "220px", "height": "178px"}}>
            <div className={styles.product_right_item_content} style={{"width": "195px", "height": "178px"}}>
              <div className={styles.product_right_icon} style={{}}>
                <Image 
                  src="/images/swap.png"
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
                  src="/images/staking.png"
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
                  src="/images/trading.png"
                  width={49}
                  height={49}
                  alt="Trading icon"
                />
              </div>
              <p className={styles.product_right_caption}>Trading</p>
            </div>
          </div>
          <div className={styles.product_right_item_mobile} style={{"width": "220px", "height": "178px"}}>
            <div className={styles.product_right_item_content} style={{"width": "195px", "height": "178px"}}>
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
        </Slider>
      </div>
    );
  }
}
