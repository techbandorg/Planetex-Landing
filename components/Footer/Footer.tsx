import React, { Component } from 'react'
import styles from './Footer.module.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.footer_contacts}>
            <h3 className={styles.footer_title}>
              Contact us
            </h3>
            <div className={styles.footer_text_medium}>
              <div>
                Listing: listing@planetex.io
              </div>
              <div>
                Support: support@planetex.io
              </div>
              <div>
                Parthership: info@planetex.io
              </div>
            </div>
          </div>
          <div className={styles.footer_products_about}>
            <div className={styles.footer_products}>
              <h3 className={styles.footer_title}>
                Products
              </h3>
              <div className={styles.footer_text_regular}>
                <div>
                Trading
                </div>
                <div>
                Exchange
                </div>
                <div>
                Launchpad
                </div>
                <div>
                Stake Box
                </div>
              </div>
            </div>
            <div className={styles.footer_products}>
              <h3 className={styles.footer_title}>
                About us
              </h3>
              <div className={styles.footer_text_regular}>
                <div>
                  About Planetex
                </div>
                <div>
                  Blog
                </div>
                <div>
                  Terms
                </div>
                <div>
                  Privacy
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}


