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
          <div className={styles.roadmap_slider_item_mobile} style={{"width": "320px", "height": "45px"}}>
            <div className={styles.roadmap_slider_item_content} style={{"width": "320px", "height": "45px"}}>
              <div className={styles.roadmap_quarter}>
                Quarter 1 2023
              </div>
              <div className={styles.roadmap_scale}>
                <div className={styles.roadmap_internal}></div>
              </div>
            </div>
          </div>
          <div className={styles.roadmap_slider_item_mobile} style={{"width": "320px", "height": "45px"}}>
            <div className={styles.roadmap_slider_item_content} style={{"width": "320px", "height": "45px"}}>
              <div className={styles.roadmap_quarter}>
                Quarter 2 2023
              </div>
              <div className={styles.roadmap_scale}></div>
            </div>
          </div>
          <div className={styles.roadmap_slider_item_mobile} style={{"width": "320px", "height": "45px"}}>
            <div className={styles.roadmap_slider_item_content} style={{"width": "320px", "height": "45px"}}>
              <div className={styles.roadmap_quarter}>
                Quarter 3 2023
              </div>
              <div className={styles.roadmap_scale}></div>
            </div>
          </div>
          <div className={styles.roadmap_slider_item_mobile} style={{"width": "320px", "height": "45px"}}>
            <div className={styles.roadmap_slider_item_content} style={{"width": "320px", "height": "45px"}}>
              <div className={styles.roadmap_quarter}>
                Quarter 4 2023
              </div>
              <div className={styles.roadmap_scale}></div>
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
          <div className={styles.roadmap_slider_caption}>
            scroll
          </div>
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