import React, { Component } from "react"
import Image from 'next/image'
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
            <div className={styles.sale_presale_divider_wrapper}>
              <div className={styles.sale_presale_divider}></div>
            </div>
            <div className={styles.sale_presale_tokensinfo}>
              <div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div className={styles.sale_presale_name}>Number of tokens</div>
                  <div className={styles.sale_presale_value}>28,000,000</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div className={styles.sale_presale_name}>Price in USDT</div>
                  <div className={styles.sale_presale_value}>$0.04</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div className={styles.sale_presale_value}>[Min 10$-Max 1000$]</div>
                </div>
              </div>
              <div className={styles.sale_presale_tokensinfo_button}>
                <div className={styles.buy_button}>
                  Buy Token
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sale_NFTSale}>
            <div className={styles.sale_NFTsale_left}>
              <h3 className={styles.sale_presale_title}>NFT Sale</h3>
              <div className={styles.sale_NFTsale_paragr}>
              Echoing Astar Network&apos;s vision to be the heart of the Network to 
              provide you with DeFi, NFT-Fi and new project discovery.
              </div>
              <h2 className={styles.sale_presale_subtitle}>
                Сharacter skills
              </h2>
              <div className={styles.sale_presale_skills_block}>
                <div className={styles.sale_presale_skill}>
                  <div>
                    <Image 
                      src="/images/damageSkill.png"
                      width={22.5}
                      height={27}
                      alt="Damage skill"
                    />
                  </div>
                  <div className={styles.sale_presale_skill_text}>
                    Damage
                  </div>
                </div>
                <div className={styles.sale_presale_skill}>
                  <div>
                    <Image 
                      src="/images/speedSkill.png"
                      width={26}
                      height={26}
                      alt="Speed skill"
                    />
                  </div>
                  <div className={styles.sale_presale_skill_text}>
                    Speed
                  </div>
                </div>
                <div className={styles.sale_presale_skill}>
                  <div>
                    <Image 
                      src="/images/healthSkill.png"
                      width={39}
                      height={20}
                      alt="Health skill"
                    />
                  </div>
                  <div className={styles.sale_presale_skill_text}>
                    Health
                  </div>
                </div>
                <div className={styles.sale_presale_skill}>
                  <div>
                    <Image 
                      src="/images/armorSkill.png"
                      width={19}
                      height={23}
                      alt="Armor skill"
                    />
                  </div>
                  <div className={styles.sale_presale_skill_text}>
                    Armor
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sale_presale_divider_wrapper}>
              <div className={styles.sale_divider}></div>
            </div>
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
              <div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div className={styles.sale_presale_name}>Number of tokens</div>
                  <div className={styles.sale_presale_value}>24,000,000</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div className={styles.sale_presale_name}>Price in USDT</div>
                  <div className={styles.sale_presale_value}>$0.07</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div className={styles.sale_presale_value}>[Min 25$-Max 2500$]</div>
                </div>
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
              <div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div className={styles.sale_presale_name}>Number of tokens</div>
                  <div className={styles.sale_presale_value}>12,000,000</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div className={styles.sale_presale_name}>Price in USDT</div>
                  <div className={styles.sale_presale_value}>$0.05</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div className={styles.sale_presale_value}>[Min 100$-Max 25000$]</div>
                </div>
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