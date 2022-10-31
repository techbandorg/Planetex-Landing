import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import styles from './RoadmapSlider.module.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class RoadmapSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div className={styles.roadmap_slider_container_mobile}>
        <Slider {...settings}>
          <div className={styles.roadmap_slider_item_mobile} style={{"width": "390px", "height": "400px"}}>
            <div className={styles.roadmap_slider_item_content} style={{"width": "390px", "height": "400px"}}>
              <div className={styles.roadmap_slider_text_block}>
                <div className={styles.roadmap_text_subtitle}>
                  Token & NFT
                </div>
                <div className={styles.roadmap_text}>
                  <p>
                  In the fourth quarter of 2022, we plan to launch IDO to raise 
                  funds that will allow us to improve and expand our decentralized 
                  platform development. The Planetex token will be used in many 
                  products of our platform and will be a good investment tool. 
                  We are also releasing a series of NFT characters that will give 
                  you the opportunity to participate in our future game.
                  </p>
                </div>
              </div>
              <div>
                <div className={styles.roadmap_quarter}>
                  Quarter 4 2022
                </div>
                <div className={styles.roadmap_scale}>
                  <div className={styles.roadmap_internal}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.roadmap_slider_item_mobile} style={{"width": "390px", "height": "400px"}}>
            <div className={styles.roadmap_slider_item_content} style={{"width": "390px", "height": "400px"}}>
              <div className={styles.roadmap_slider_text_block}>
                <div className={styles.roadmap_text_subtitle}>
                  DEX
                </div>
                <div className={styles.roadmap_text}>
                  <p>
                  In the first quarter of 2023, we plan to launch our DEX platform 
                  and introduce you to many decentralized financial instruments 
                  within it. Our team wants to implement their original ideas in 
                  such DeFi classics as Swap, Staking, Farms and integrate new 
                  products that have not been used in the crypto world before. 
                  Many positive surprises are waiting for you!
                  </p>
                </div>
              </div>
              <div>
                <div className={styles.roadmap_quarter}>
                  Quarter 1 2023
                </div>
                <div className={styles.roadmap_scale}>
                  <div className={styles.roadmap_internal}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.roadmap_slider_item_mobile} style={{"width": "390px", "height": "400px"}}>
            <div className={styles.roadmap_slider_item_content} style={{"width": "390px", "height": "400px"}}>
              <div className={styles.roadmap_slider_text_block}>
                <div className={styles.roadmap_text_subtitle}>
                  P2E Game
                </div>
                <div className={styles.roadmap_text}>
                  <p>
                  In the third quarter of 2023, we plan to launch a game that we 
                  believe will generate a lot of positive reactions and interest 
                  from P2E gamers. A dynamic royal battle that will not leave 
                  indifferent fans of action and drive. Many characters with 
                  different skills, original graphics and the opportunity to earn 
                  tokens. This will be our signature dish for blockchain devotees!
                  </p>
                </div>
              </div>
              <div>
                <div className={styles.roadmap_quarter}>
                  Quarter 3 2023
                </div>
                <div className={styles.roadmap_scale}>
                  <div className={styles.roadmap_internal}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.roadmap_slider_item_mobile} style={{"width": "390px", "height": "400px"}}>
            <div className={styles.roadmap_slider_item_content} style={{"width": "390px", "height": "400px"}}>
              <div className={styles.roadmap_slider_text_block}>
                <div className={styles.roadmap_text_subtitle}>
                  Metaverse
                </div>
                <div className={styles.roadmap_text}>
                  <p>
                  In the last quarter of 2023, we plan to launch our own Metaverse. 
                  A colorful unexplored area that will let you build your own space 
                  stations and explore new planets. It will be a new world that you 
                  can discover with our project!
                  </p>
                </div>
              </div>
              <div>
                <div className={styles.roadmap_quarter}>
                  Quarter 4 2023
                </div>
                <div className={styles.roadmap_scale}>
                  <div className={styles.roadmap_internal}></div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className={styles.roadmap_slider_caption_wrapper}>
          <div className={styles.roadmap_slider_left_arrow}>
            <Image 
              src="/images/landing/leftArrow.png"
              height={18}
              width={34}
              alt="Left arrow"
            />
          </div>
          {/* <div className={styles.roadmap_slider_caption}>
            scroll
          </div> */}
          <div className={styles.roadmap_slider_right_arrow}>
            <Image 
              src="/images/landing/rightArrow.png"
              height={18}
              width={34}
              alt="Right arrow"
            />
          </div>
        </div>
      </div>
    );
  }
}