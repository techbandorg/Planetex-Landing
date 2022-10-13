import React, { Component } from "react"
import styles from './SaleSection.module.css'
import SaleSlider from '../SaleSlider/SaleSlider'

export default class SaleSection extends Component {
  render() {
    return (
      <section className={styles.sale_section}>
        <h2 className={styles.section_title}>
          Sale Details
        </h2>
        <div className={styles.sale_cards}>
          <div className={styles.sale_presale}>
            <div className={styles.sale_presale_left}>
              <h3 className={styles.sale_presale_title}>Pre-Sale</h3>
              <div className={styles.sale_presale_paragr}>
                Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                future, Starfish aims to be collaborative, convenient and communal 
                to build our product suites and become the one-stop-shop on Astar 
                Network to provide you with DeFi, NFT-Fi and new project discovery.
              </div>
            </div>
            <div className={styles.sale_presale_divider}></div>
            <div className={styles.sale_presale_tokensinfo}>
              <div className={styles.sale_presale_tokensinfo_item}>
                <div># OF TOKENS</div>
                <div>150.000.000</div>
              </div>
              <div className={styles.sale_presale_tokensinfo_item}>
                <div>PRICE IN USD</div>
                <div>0,009</div>
              </div>
              <div className={styles.sale_presale_tokensinfo_item}>
                <div>FUNDING</div>
                <div>1.350.000</div>
              </div>
              <div className={styles.sale_presale_tokensinfo_item}>
                <div>SALE DATE</div>
                <div>20 January</div>
              </div>
              <div className={styles.sale_presale_tokensinfo_item}>
                <div>LOCKED</div>
                <div>6 months</div>
              </div>
              <div className={styles.sale_presale_tokensinfo_button}>
                <div className={styles.buy_button}>
                  Buy Token
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sale_NFTSale}>
            <div className={styles.sale_presale_left}>
              <h3 className={styles.sale_presale_title}>NFT Sale</h3>
              <div className={styles.sale_presale_paragr}>
              Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
              future, Starfish aims to be collaborative, convenient and 
              communal to build our product suites and become the one-stop-shop 
              on Astar Network to provide you with DeFi, NFT-Fi and new project 
              discovery.
              </div>
            </div>
            <div className={styles.sale_divider}></div>
            <div className={styles.sale_NFTSale_tokensinfo}>
              <div className={styles.sale_presale_tokensinfo_button}>
                <div className={styles.buy_button}>
                  Buy Token
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sale_MainSale}>
            <div className={styles.sale_presale_left}>
              <h3 className={styles.sale_presale_title}>Main Sale</h3>
              <div className={styles.sale_presale_paragr}>
                Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                future, Starfish aims to be collaborative, convenient and communal 
                to build our product suites and become the one-stop-shop on Astar 
                Network to provide you with DeFi, NFT-Fi and new project discovery.
              </div>
            </div>
            <div className={styles.sale_divider}></div>
            <div className={styles.sale_presale_tokensinfo}>
              <div className={styles.sale_presale_tokensinfo_item}>
                <div># OF TOKENS</div>
                <div>150.000.000</div>
              </div>
              <div className={styles.sale_presale_tokensinfo_item}>
                <div>PRICE IN USD</div>
                <div>0,009</div>
              </div>
              <div className={styles.sale_presale_tokensinfo_item}>
                <div>FUNDING</div>
                <div>1.350.000</div>
              </div>
              <div className={styles.sale_presale_tokensinfo_item}>
                <div>SALE DATE</div>
                <div>20 January</div>
              </div>
              <div className={styles.sale_presale_tokensinfo_item}>
                <div>LOCKED</div>
                <div>6 months</div>
              </div>
              <div className={styles.sale_presale_tokensinfo_button}>
                <div className={styles.buy_button}>
                  Buy Token
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sale_PrivateSale}>
            <div className={styles.sale_presale_left}>
              <h3 className={styles.sale_presale_title}>Private Sale</h3>
              <div className={styles.sale_presale_paragr}>
                Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                future, Starfish aims to be collaborative, convenient and communal 
                to build our product suites and become the one-stop-shop on Astar 
                Network to provide you with DeFi, NFT-Fi and new project discovery.
              </div>
            </div>
            <div className={styles.sale_divider}></div>
            <div className={styles.sale_presale_tokensinfo}>
              <div className={styles.sale_presale_tokensinfo_item}>
                <div># OF TOKENS</div>
                <div>150.000.000</div>
              </div>
              <div className={styles.sale_presale_tokensinfo_item}>
                <div>PRICE IN USD</div>
                <div>0,009</div>
              </div>
              <div className={styles.sale_presale_tokensinfo_item}>
                <div>FUNDING</div>
                <div>1.350.000</div>
              </div>
              <div className={styles.sale_presale_tokensinfo_item}>
                <div>SALE DATE</div>
                <div>20 January</div>
              </div>
              <div className={styles.sale_presale_tokensinfo_item}>
                <div>LOCKED</div>
                <div>6 months</div>
              </div>
              <div className={styles.sale_presale_tokensinfo_button}>
                <div className={styles.buy_button}>
                  Buy Token
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sale_listing}>
            <h3 className={styles.sale_listing_title}>Listing on DEX</h3>
            <div className={styles.sale_listing_timer_block}>
              <div className={styles.sale_listing_timer_item}>
                <div className={styles.sale_listing_timer_cell}>1</div>
                <div className={styles.sale_listing_timer_caption}>Days</div>
              </div>
              <div className={styles.sale_listing_timer_item}>
                <div className={styles.sale_listing_timer_cell}>21</div>
                <div className={styles.sale_listing_timer_caption}>Hours</div>
              </div>
              <div className={styles.sale_listing_timer_item}>
                <div className={styles.sale_listing_timer_cell}>46</div>
                <div className={styles.sale_listing_timer_caption}>Minutes</div>
              </div>
              <div className={styles.sale_listing_timer_item}>
                <div className={styles.sale_listing_timer_cell}>11</div>
                <div className={styles.sale_listing_timer_caption}>Seconds</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobile_slider}>
          <SaleSlider />
        </div>
      </section>
    );
  }
}