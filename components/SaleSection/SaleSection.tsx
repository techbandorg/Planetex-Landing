import React, { Component } from "react"
import Image from 'next/image'
import styles from './SaleSection.module.css'
import SaleSlider from '../SaleSlider/SaleSlider'
import { Buy_Button_1, Buy_Button_2, Soon_Button } from '../buttons/buttons'

export default class SaleSection extends Component {
  render() {
    return (
      <section className={styles.sale_section}>
        <a id={"saleDetails"}></a>
        <div className={styles.section_title_container}>
          <h2 className={styles.section_title}>
            Sale Details
          </h2>
          <div className={styles.section_title_background}>
            <Image 
              src="/images/SaleDetailsPhone.svg"
              width={384}
              height={333}
              alt="Sale Details Phone"
            />
          </div>
        </div>
        <div className={styles.sale_cards}>
          <div className={styles.sale_presale}>
            <div className={styles.sale_presale_left}>
              <h3 className={styles.sale_presale_title}>Pre-Sale</h3>
              <div className={styles.sale_presale_paragr}>
                Participation in the Pre-Sale will give you the opportunity to 
                invest in our project at an early stage, get tokens at a lower 
                price and have an undeniable advantage over other users of the 
                platform in the future.
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
                  <div className={styles.sale_presale_value}>[Min 10$]</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div className={styles.sale_presale_value}>Start - 01.11.2022</div>
                </div>
              </div>
              <div className={styles.sale_presale_tokensinfo_button}>
                <a className={styles.join_ido_button} href="https://app.planetex.io/presale" target="blank">
                  <Buy_Button_1 />
                </a>
                {/* <div className={styles.buy_button}>
                  Buy Token
                </div> */}
              </div>
            </div>
          </div>
          <a id={"mintNFT"}></a>
          <div className={styles.sale_NFTSale}>
            <div className={styles.sale_NFTsale_left}>
              <h3 className={styles.sale_presale_title}>NFT Sale</h3>
              <div className={styles.sale_NFTsale_paragr}>
                Mint your character and get the opportunity to participate in 
                our game with an advantage over other players!
              </div>
              <h2 className={styles.sale_presale_subtitle}>
                Сharacter skills
              </h2>
              <div className={styles.sale_presale_skills_block}>
                <div className={styles.sale_presale_skill}>
                  <div className={styles.sale_presale_damage_img}>
                    <Image 
                      src="/images/damageSkill.png"
                      width={'100%'}
                      height={'120%'}
                      alt="Damage skill"
                    />
                  </div>
                  <div className={styles.sale_presale_skill_text}>
                    Damage
                  </div>
                </div>
                <div className={styles.sale_presale_skill}>
                  <div className={styles.sale_presale_speed_img}>
                    <Image 
                      src="/images/speedSkill.png"
                      width={'100%'}
                      height={'100%'}
                      alt="Speed skill"
                    />
                  </div>
                  <div className={styles.sale_presale_skill_text}>
                    Speed
                  </div>
                </div>
                <div className={styles.sale_presale_skill}>
                  <div className={styles.sale_presale_health_img}>
                    <Image 
                      src="/images/healthSkill.png"
                      width={'100%'}
                      height={'85%'}
                      alt="Health skill"
                    />
                  </div>
                  <div className={styles.sale_presale_skill_text}>
                    Health
                  </div>
                </div>
                <div className={styles.sale_presale_skill}>
                  <div className={styles.sale_presale_armor_img}>
                    <Image 
                      src="/images/armorSkill.png"
                      width={'100%'}
                      height={'121%'}
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
              <div className={styles.sale_presale_divider}></div>
            </div>
            <div className={styles.sale_NFTSale_tokensinfo}>
              <div className={styles.sale_NFTSale_img}>
                <Image 
                  src="/images/NFTSaleIMG.png"
                  width={684}
                  height={680}
                  alt="Health skill"
                />
              </div>
              <div className={styles.sale_presale_tokensinfo_button}>
                <a className={styles.join_ido_button} href="https://app.planetex.io/nft-sale" target="blank">
                  <Buy_Button_2 />
                </a>
                {/* <div className={styles.buy_button}>
                  Buy Token
                </div> */}
              </div>
            </div>
          </div>
          <div className={styles.sale_MainSale}>
            <div className={styles.sale_presale_left}>
              <h3 className={styles.sale_presale_title}>Main Sale</h3>
              <div className={styles.sale_presale_paragr}>
                The Main Sale will be the last chance to invest in our project 
                at an early stage before the release of our token on the DEX 
                platforms. Better take part!
              </div>
            </div>
            <div className={styles.sale_presale_divider_wrapper}>
              <div className={styles.sale_presale_divider}></div>
            </div>
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
                  <div className={styles.sale_presale_value}>[Min 25$]</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div className={styles.sale_presale_value}>Start - 08.01.2023</div>
                </div>
              </div>
              <div className={styles.sale_presale_tokensinfo_button}>
                <Soon_Button />
                {/* <div className={styles.buy_button}>
                  Buy Token
                </div> */}
              </div>
            </div>
          </div>
          <div className={styles.sale_PrivateSale}>
            <div className={styles.sale_presale_left}>
              <h3 className={styles.sale_presale_title}>Private Sale</h3>
              <div className={styles.sale_presale_paragr}>
                Private Sale will allow you to invest more significant 
                amounts in our project at an attractive price. To participate 
                in the Private Sale, you will need to get into the whitelist, 
                which will appear during the Main Sale.
              </div>
            </div>
            <div className={styles.sale_presale_divider_wrapper}>
              <div className={styles.sale_presale_divider}></div>
            </div>
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
                  <div className={styles.sale_presale_value}>[Min 100$]</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div className={styles.sale_presale_value}>Start - 15.02.2023</div>
                </div>
              </div>
              <div className={styles.sale_presale_tokensinfo_button}>
                <Soon_Button />
                {/* <div className={styles.buy_button}>
                  Buy Token
                </div> */}
              </div>
            </div>
          </div>
          <div className={styles.sale_listing}>
            <h3 className={styles.sale_listing_title}>Listing on DEX</h3>
            {/* <div className={styles.sale_listing_timer_block}>
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
            </div> */}
            <div className={styles.sale_listing_text_block}>
              <p className={styles.sale_listing_text}>Coming Soon</p>
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