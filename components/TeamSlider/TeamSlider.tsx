import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import styles from './TeamSlider.module.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class TeamSlider extends Component {
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
      <div className={styles.team_slider_container_mobile}>
        <Slider {...settings}>
          <div style={{"height": "313px"}}>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
          </div>
          <div style={{"height": "313px"}}>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
          </div>
          <div style={{"height": "313px"}}>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
          </div>
          <div style={{"height": "313px"}}>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
          </div>
          <div style={{"height": "313px"}}>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
          </div>
          <div style={{"height": "313px"}}>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
          </div>
          <div style={{"height": "313px"}}>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
          </div>
          <div style={{"height": "313px"}}>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}