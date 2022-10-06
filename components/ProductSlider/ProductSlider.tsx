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
      speed: 500
    };
    return (
      <div className={styles.product_slider_container}>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div className={styles.product_slider_slide}>
            <h3>1</h3>
          </div>
          <div className={styles.product_slider_slide}>
            <h3>2</h3>
          </div>
          <div className={styles.product_slider_slide}>
            <h3>3</h3>
          </div>
          <div className={styles.product_slider_slide}>
            <h3>4</h3>
          </div>
          <div className={styles.product_slider_slide}>
            <h3>5</h3>
          </div>
          <div className={styles.product_slider_slide}>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
