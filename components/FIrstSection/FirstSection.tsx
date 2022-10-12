import React, { Component } from "react"
import Image from 'next/image'
import styles from './FirstSection.module.css'

export default class FirstSection extends Component {
  render() {
    return (
      <section className={styles.first_section}>
        <div className={styles.first_content}>
          <h1 className={styles.first_title}>
            Buy and Sell<br/>
            cryptocurrency<br/>
            on the Planetex
          </h1>
          <p className={styles.first_subtitle}>
            Trading on Planetex is quite simple and requires only signing up for a Planetex account and wallet creation.
          </p>
          <div className={styles.first_buttons_block}>
            <div className={styles.join_button}>
              Join IDO
            </div>
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
          <div className={styles.planetex_tok}>
            <Image
              src="/images/PlantexTok.png"
              height={42}
              width={188}
              alt="Planetex token info"
            />
          </div>
          <div className={styles.diagram}>
            <Image
              src="/images/Diagram.png"
              height={122}
              width={207}
              alt="Planetex token diagram"
            />
          </div>
          <div className={styles.planetex_tok_stat}>
            <Image
              src="/images/PlantexTokStat.png"
              height={87}
              width={218}
              alt="Planetex token statistic"
            />
          </div>
        </div>
        <div className={styles.second_buttons_block}>
          <div className={styles.join_button}>
            Join IDO
          </div>
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
      </section>
    );
  }
}