import React, { Component } from "react"
import Image from 'next/image'
import styles from './FirstSection.module.css'
import { JoinIDO_2 } from '../buttons/buttons'

export default class FirstSection extends Component {
  render() {
    return (
      <section className={styles.first_section}>
        <div className={styles.first_section_content}>
          <div className={styles.first_section_polar_lights}>
            <Image 
              src="/images/polarLights.svg"
              height={986}
              width={1360}
              alt="Download icon"
            />
          </div>
          <div className={styles.first_content}>
            <h1 className={styles.first_title}>
              Meet Planetex - world&#39;s<br /> 
              first artificial intelligence<br /> 
              decentralized ecosystem
            </h1>
            <p className={styles.first_subtitle}>
            Now you have a possibility to join our community of token and NFT 
            holders for unique further experience
            </p>
            <div className={styles.first_buttons_block}>
              <a className={styles.join_ido_button} href="https://planetexapp.vercel.app/presale" target="blank">
                <JoinIDO_2 />
              </a>
              <div className={styles.download_WhitePaper_button}>
                <div className={styles.download_logo}>
                  <Image 
                    src="/images/download.svg"
                    height={75}
                    width={75}
                    alt="Download icon"
                  />
                </div>
                Download WhitePaper
              </div>
            </div>
          </div>
          <div className={styles.first_right}>
            <div className={styles.first_section_astronaut}>
              <Image 
                src="/images/astronaut.png"
                height={1485}
                width={1695}
                alt="Download icon"
              />
            </div>
            <div className={styles.planetex_tok}>
              <Image
                src="/images/PlantexTok.svg"
                height={42}
                width={188}
                alt="Planetex token info"
              />
            </div>
            <div className={styles.diagram}>
              <Image
                src="/images/Diagram.svg"
                height={122}
                width={207}
                alt="Planetex token diagram"
              />
            </div>
            <div className={styles.planetex_tok_stat}>
              <Image
                src="/images/PlantexTokStat.svg"
                height={87}
                width={218}
                alt="Planetex token statistic"
              />
            </div>
          </div>
          <div className={styles.second_buttons_block}>
          <a className={styles.join_ido_button} href="https://planetexapp.vercel.app/presale" target="blank">
            <JoinIDO_2 />
          </a>
            <div className={styles.download_WhitePaper_button}>
              <div className={styles.download_logo}>
                <Image 
                  src="/images/download.svg"
                  height={75}
                  width={75}
                  alt="Download icon"
                />
              </div>
              WhitePaper
            </div>
          </div>
        </div>
      </section>
    );
  }
}