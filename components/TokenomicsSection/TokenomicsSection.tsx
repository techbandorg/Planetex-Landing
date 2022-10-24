import React, { Component } from "react"
import Image from 'next/image'
import styles from './TokenomicsSection.module.css'

export default class TokenomicsSection extends Component {
  render() {
    return (
      <section className={styles.tokenomics_section}>
        <div className={styles.tokenomics_container}>
          <div className={styles.tokenomics_img}>
            <Image 
              src="/images/landing/tokenomics.svg"
              width={2622}
              height={5675}
              alt="Tokenomics"
            />
          </div>
        </div>
        <h2 className={styles.section_title}>
          Tokenomics<a id={"tokenomics"}></a>
        </h2>
      </section>
    );
  }
}