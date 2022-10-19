import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import styles from './SaleSlider.module.css'
import { Buy_Button_1 } from '../buttons/buttons'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class SaleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div className={styles.sale_slider_container_mobile}>
        <div className={styles.sale_slider_caption_wrapper}>
          <div className={styles.sale_slider_left_arrow}>
            <Image 
              src="/images/landing/leftArrow.png"
              height={18}
              width={34}
              alt="Left arrow"
            />
          </div>
          <div className={styles.sale_slider_caption}>
            scroll
          </div>
          <div className={styles.sale_slider_right_arrow}>
            <Image 
              src="/images/landing/rightArrow.png"
              height={18}
              width={34}
              alt="Right arrow"
            />
          </div>
        </div>
        <Slider {...settings}>
          <div style={{"height": "672px"}}>
            <div className={styles.sale_NFTSale}>
              <div className={styles.sale_presale_left}>
                <h3 className={styles.sale_presale_title}>NFT Sale</h3>
                <div className={styles.sale_presale_paragr}>
                Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                future, Starfish aims to be collaborative, convenient and 
                communal to build our product suites and become the one-stop-shop 
                on Astar Network to provide you with DeFi, NFT-Fi and new project 
                discovery.
                </div>
              </div>
              <div className={styles.sale_NFTSale_tokensinfo}>
                <div className={styles.sale_presale_tokensinfo_button}>
                  <Buy_Button_1 />
                </div>
              </div>
            </div>
          </div>
          <div style={{"height": "672px"}}>
            <div className={styles.sale_NFTSale}>
              <div className={styles.sale_presale_left}>
                <h3 className={styles.sale_presale_title}>NFT Sale</h3>
                <div className={styles.sale_presale_paragr}>
                Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                future, Starfish aims to be collaborative, convenient and 
                communal to build our product suites and become the one-stop-shop 
                on Astar Network to provide you with DeFi, NFT-Fi and new project 
                discovery.
                </div>
              </div>
              <div className={styles.sale_NFTSale_tokensinfo}>
                <div className={styles.sale_presale_tokensinfo_button}>
                  <Buy_Button_1 />
                </div>
              </div>
            </div>
          </div>
          <div style={{"height": "672px"}}>
            <div className={styles.sale_NFTSale}>
              <div className={styles.sale_presale_left}>
                <h3 className={styles.sale_presale_title}>NFT Sale</h3>
                <div className={styles.sale_presale_paragr}>
                Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                future, Starfish aims to be collaborative, convenient and 
                communal to build our product suites and become the one-stop-shop 
                on Astar Network to provide you with DeFi, NFT-Fi and new project 
                discovery.
                </div>
              </div>
              <div className={styles.sale_NFTSale_tokensinfo}>
                <div className={styles.sale_presale_tokensinfo_button}>
                  <Buy_Button_1 />
                </div>
              </div>
            </div>
          </div>
          <div style={{"height": "672px"}}>
            <div className={styles.sale_NFTSale}>
              <div className={styles.sale_presale_left}>
                <h3 className={styles.sale_presale_title}>NFT Sale</h3>
                <div className={styles.sale_presale_paragr}>
                Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                future, Starfish aims to be collaborative, convenient and 
                communal to build our product suites and become the one-stop-shop 
                on Astar Network to provide you with DeFi, NFT-Fi and new project 
                discovery.
                </div>
              </div>
              <div className={styles.sale_NFTSale_tokensinfo}>
                <div className={styles.sale_presale_tokensinfo_button}>
                  <Buy_Button_1 />
                </div>
              </div>
            </div>
          </div>
          <div style={{"height": "672px"}}>
            <div className={styles.sale_NFTSale}>
              <div className={styles.sale_presale_left}>
                <h3 className={styles.sale_presale_title}>NFT Sale</h3>
                <div className={styles.sale_presale_paragr}>
                Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                future, Starfish aims to be collaborative, convenient and 
                communal to build our product suites and become the one-stop-shop 
                on Astar Network to provide you with DeFi, NFT-Fi and new project 
                discovery.
                </div>
              </div>
              <div className={styles.sale_NFTSale_tokensinfo}>
                <div className={styles.sale_presale_tokensinfo_button}>
                  <Buy_Button_1 />
                </div>
              </div>
            </div>
          </div>
        </Slider>
        
      </div>
    );
  }
}