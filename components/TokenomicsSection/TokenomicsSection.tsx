import React, { Component } from "react"
import styles from './TokenomicsSection.module.css'

export default class TokenomicsSection extends Component {
  render() {
    return (
      <section className={styles.tokenomics_section}>
        <h2 className={styles.section_title}>
          Tokenomics
        </h2>
        <div className={styles.tokenomics_container}>
        </div>
      </section>
    );
  }
}