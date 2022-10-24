import React, { Component } from 'react'
import styles from './PartnersSection.module.css'
import Image from 'next/image'

export default class PartnersSection extends Component {
  render() {
    return (
      <section className={styles.partners_section}>
        <h2 className={styles.partners_title}>
          Partners
        </h2>
        <div className={styles.partners_block}>
          <div className={styles.partners_item}>
            <div className={styles.partners_logo}>
              <Image 
                src="/images/image195.svg"
                height={49}
                width={49}
                alt="Partners icon"
              />
            </div>
            <div className={styles.partners_name}>
              DATE LOIF
            </div>
          </div>
          <div className={styles.partners_item}>
            <div className={styles.partners_logo}>
              <Image 
                src="/images/image196.svg"
                height={49}
                width={49}
                alt="Partners icon"
              />
            </div>
            <div className={styles.partners_name}>
              DATE LOIF
            </div>
          </div>
          <div className={styles.partners_item}>
            <div className={styles.partners_logo}>
              <Image 
                src="/images/image197.svg"
                height={49}
                width={49}
                alt="Partners icon"
              />
            </div>
            <div className={styles.partners_name}>
              DATE LOIF
            </div>
          </div>
          <div className={styles.partners_item}>
            <div className={styles.partners_logo}>
              <Image 
                src="/images/image198.svg"
                height={49}
                width={49}
                alt="Partners icon"
              />
            </div>
            <div className={styles.partners_name}>
              DATE LOIF
            </div>
          </div>
          <div className={styles.partners_item}>
            <div className={styles.partners_logo}>
              <Image 
                src="/images/image199.svg"
                height={49}
                width={49}
                alt="Partners icon"
              />
            </div>
            <div className={styles.partners_name}>
              DATE LOIF
            </div>
          </div>
        </div>
      </section>
    );
  }
}