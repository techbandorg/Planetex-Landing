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
                src="/images/image195.png"
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
                src="/images/image196.png"
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
                src="/images/image197.png"
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
                src="/images/image198.png"
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
                src="/images/image199.png"
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