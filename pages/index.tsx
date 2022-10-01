import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Planetex</title>
        <meta name="description" content="Planetex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo_container}>
          <Image 
            src="/images/logo.svg"
            height={28}
            width={164}
            alt="Plantex logo"
          />
        </div>
        <div className={styles.header_nav_wrapper}>
          <nav className={styles.main_nav}>
            <ul className={styles.main_nav_ul}>
              <li className={styles.main_nav_li}><a href="" className={styles.main_nav_a}>Project benefits</a></li>
              <li className={styles.main_nav_li}><a href="" className={styles.main_nav_a}>Product Suite</a></li>
              <li className={styles.main_nav_li}><a href="" className={styles.main_nav_a}>Tokenomics</a></li>
              <li><a href="" className={styles.main_nav_a}>Sale Details</a></li>
            </ul>
          </nav>
          <div className={styles.header_join_button_container}>
            <div className={styles.header_join_button}>
              Join IDO
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
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
        </section>
        <section className={styles.win_countdown_section}>
          <div className={styles.win_countdown_timer_block}>
            <div className={styles.win_countdown_timer_item}>
              <div className={styles.win_countdown_timer_cell}>1</div>
              <div className={styles.win_countdown_timer_caption}>Days</div>
            </div>
            <div className={styles.win_countdown_timer_item}>
              <div className={styles.win_countdown_timer_cell}>21</div>
              <div className={styles.win_countdown_timer_caption}>Hours</div>
            </div>
            <div className={styles.win_countdown_timer_item}>
              <div className={styles.win_countdown_timer_cell}>46</div>
              <div className={styles.win_countdown_timer_caption}>Minutes</div>
            </div>
            <div className={styles.win_countdown_timer_item}>
              <div className={styles.win_countdown_timer_cell}>11</div>
              <div className={styles.win_countdown_timer_caption}>Seconds</div>
            </div>
          </div>
          <div className={styles.win_countdown_progress_block}>
            <div className={styles.win_countdown_progress_container}>
              <div className={styles.win_countdown_progress_caption}>
                Pre-sale
              </div>
              <div className={styles.win_countdown_progress_initial}>
                <div className={styles.win_countdown_progress_initial_caption}>Initial sales amount:</div>
                <div className={styles.win_countdown_progress_initial_amount}>0,04$ per token</div>
              </div>
              <div className={styles.win_countdown_progress_networks}>
                <div className={styles.win_countdown_progress_network_button}>
                  Ethereum Network
                </div>
                <div className={styles.win_countdown_progress_network_button}>
                  BSC Network
                </div>
              </div>
              <div className={styles.win_countdown_progress_bar}>
                <div className={styles.win_countdown_progress_external}>
                  <div className={styles.win_countdown_progress_internal}>

                  </div>
                </div>
              </div>
              <div className={styles.win_countdown_progress_range}>
                <div className={styles.win_countdown_progress_range_left}>
                  <div>0</div>
                  <div className={styles.win_countdown_progress_picon}>
                    <Image
                      src="/images/Picon.svg"
                      height={17}
                      width={17}
                      alt="Planetex token icon"
                    />
                  </div>
                </div>
                <div className={styles.win_countdown_progress_range_right}>
                  <div>28 000 000</div>
                  <div className={styles.win_countdown_progress_picon}>
                    <Image
                      src="/images/Picon.svg"
                      height={17}
                      width={17}
                      alt="Planetex token icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.benefits_section}>
          <div className={styles.benefits_container}>
            <h2 className={styles.section_title}>
              Business model
            </h2>
            <div className={styles.benefits_first_block}>
              <div className={styles.benefits_text_container}>
                <div className={styles.benefits_text_block}>
                  <div className={styles.benefits_number_container}>
                    <span className={styles.benefits_number}>01</span>
                  </div>
                  <h3 className={styles.benefits_text_title}>NFT</h3>
                  <div>
                    <p className={styles.benefits_text}>
                    Trading on Planetex is quite simple and requires only signing 
                    up for a Planetex account and wallet creation. Keep track of 
                    your orders in real time with in depth market analysis. 
                    Increase your chance of winning your open contracts. We 
                    provided with you all the tools you need.
                    </p>
                  </div>
                </div>
                <div className={`${styles.benefits_text_block}, ${styles.benefits_text_block2}`}>
                  <div className={styles.benefits_number_container}>
                    <span className={styles.benefits_number}>02</span>
                  </div>
                  <h3 className={styles.benefits_text_title}>Staking</h3>
                  <div>
                    <p className={styles.benefits_text}>
                    Trading on Planetex is quite simple and requires only signing 
                    up for a Planetex account and wallet creation. Keep track of 
                    your orders in real time with in depth market analysis. 
                    Increase your chance of winning your open contracts. We 
                    provided with you all the tools you need.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.benefits_img_container}>
                <Image 
                  src="/images/Group357965.png"
                  width={725}
                  height={746}
                  alt="Coin"
                />
              </div>
            </div>
            <div className={styles.benefits_second_block}>
              <div className={styles.benefits_img_container}>
                <Image 
                  src="/images/Group357989.png"
                  width={725}
                  height={746}
                  alt="Coin"
                />
              </div>
              <div className={styles.benefits_text_container}>
                <div className={styles.benefits_text_block}>
                  <div className={styles.benefits_number_container}>
                    <span className={styles.benefits_number}>03</span>
                  </div>
                  <h3 className={styles.benefits_text_title}>Trading</h3>
                  <div>
                    <p className={styles.benefits_text}>
                      Trading on Planetex is quite simple and requires only 
                      signing up for a Planetex account and wallet creation. 
                      Keep track of your orders in real time with in depth 
                      market analysis. Increase your chance of winning your 
                      open contracts. We provided with you all the tools you 
                      need.
                    </p>
                  </div>
                </div>
                <div className={`${styles.benefits_text_block}, ${styles.benefits_text_block2}`}>
                  <div className={styles.benefits_number_container}>
                    <span className={styles.benefits_number}>04</span>
                  </div>
                  <h3 className={styles.benefits_text_title}>Trading</h3>
                  <div>
                    <p className={styles.benefits_text}>
                      Trading on Planetex is quite simple and requires only 
                      signing up for a Planetex account and wallet creation. 
                      Keep track of your orders in real time with in depth 
                      market analysis. Increase your chance of winning your 
                      open contracts. We provided with you all the tools you 
                      need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.product_section}>
          <div className={styles.product_container}>
            <h2 className={styles.section_title}>
              Product Suite
            </h2>
            <div className={styles.product_content}>
              <div className={styles.product_left_content}>
                <p className={styles.product_left_text}>
                  Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                  future, Starfish aims to be collaborative, convenient and 
                  communal to build our product suites and become the one-stop-shop 
                  on Astar Network to provide you with DeFi, NFT-Fi and new project 
                  discovery.
                </p>
                <div className={styles.buy_button}>
                  Buy Token
                </div>
              </div>
              <div className={styles.product_right_content}>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <Image 
                      src="/images/swap.png"
                      width={55}
                      height={52}
                      alt="Swap icon"
                    />
                  </div>
                  <p className={styles.product_right_caption}>Swap</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <Image 
                      src="/images/staking.png"
                      width={59}
                      height={56}
                      alt="Staking icon"
                    />
                  </div>
                  <p className={styles.product_right_caption}>Staking</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <Image 
                      src="/images/trading.png"
                      width={49}
                      height={49}
                      alt="Trading icon"
                    />
                  </div>
                  <p className={styles.product_right_caption}>Trading</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <Image 
                      src="/images/launchpad.png"
                      width={52}
                      height={52}
                      alt="Launchpad icon"
                    />
                  </div>
                  <p className={styles.product_right_caption}>Launchpad</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <Image 
                      src="/images/swap.png"
                      width={55}
                      height={52}
                      alt="Swap icon"
                    />
                  </div>
                  <p className={styles.product_right_caption}>Swap</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <Image 
                      src="/images/staking.png"
                      width={59}
                      height={56}
                      alt="Staking icon"
                    />
                  </div>
                  <p className={styles.product_right_caption}>Staking</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <Image 
                      src="/images/trading.png"
                      width={49}
                      height={49}
                      alt="Trading icon"
                    />
                  </div>
                  <p className={styles.product_right_caption}>Trading</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <Image 
                      src="/images/launchpad.png"
                      width={52}
                      height={52}
                      alt="Launchpad icon"
                    />
                  </div>
                  <p className={styles.product_right_caption}>Launchpad</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.p2egame_section}>
          <h2 className={styles.section_title}>
            Game
          </h2>
          <div className={styles.p2egame_section_content}>
            <div className={styles.p2egame_text_block}>
              <h3 className={styles.p2egame_text_title}>
                New dynamic P2E game!<br/>
                Be the winner among the rest!
              </h3>
              <p className={styles.p2egame_text_paragraph}>
              A spaceship that was transporting heroes from different planets 
              crashes on the planet Supreme X-132 as a result of an unsuccessful 
              Intergalactic hyper-jump and a malfunction of the spacecraft engine. 
              The spaceship is on fire and only one working capsule remains on 
              board for an emergency return. The goal of your hero is to find 
              weapons, defeat rivals in the royal battle and return alive, taking 
              Planetex tokens with them in each of their rounds!<br/>
              <br/>
              10 characters from the NFT collection have additional upgrades that 
              will give you an edge over your opponents, and therefore an 
              increased chance of winning in this exciting P2E game!<br/>
              <br/>
              Get your own card!
              </p>
              <div className={styles.buy_button}>
                Buy Token
              </div>
            </div>
            <div className={styles.p2egame_image_block}>
              <Image 
                src="/images/P2Egame.png"
                width={579}
                height={579}
                alt="P2E game illustration"
              />
            </div>
          </div>
        </section>
        <section className={styles.roadmap_section}>
          <h2 className={`${styles.section_title} ${styles.roadmap_title}`}>
            Roadmap
          </h2>
          <div className={styles.roadmap_content}>
            <div className={styles.roadmap_text_block}>
              <div className={styles.roadmap_text_subtitle}>
                NFT
              </div>
              <div className={styles.roadmap_text}>
                <p>
                Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                future, Starfish aims Echoing Astar Network&apos;s vision to be the 
                heart of the multi-chain future, Starfish aims Echoing Astar 
                Network&apos;s vision to be the heart of the, Starfish aims Echoing 
                Astar Network&apos;s vision to be the heart of the multi-chain future, 
                Starfish aims Echoing Astar Network&apos;s vision to be the heart of 
                the multi-chain future, Starfish aimsing Astar Network&apos;s vision 
                to be the heart of the multi-chain future, Starfish aims 
                </p>
              </div>
            </div>
          </div>
          <div className={styles.roadmap_scale_container}>
            <div className={styles.roadmap_quarters}>
              <div className={styles.roadmap_quarter}>
                Quarter 1 2023
              </div>
              <div className={styles.roadmap_quarter}>
                Quarter 2 2023
              </div>
              <div className={styles.roadmap_quarter}>
                Quarter 3 2023
              </div>
              <div className={styles.roadmap_quarter}>
                Quarter 4 2023
              </div>
            </div>
            <div className={styles.roadmap_scale}>
              <div className={styles.roadmap_internal}>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.tokenomics_section}>
          <h2 className={styles.section_title}>
            Tokenomics
          </h2>
          <div className={styles.tokenomics_container}>
          </div>
        </section>
        <section className={styles.team_section}>
          <h2 className={styles.section_title}>
            The Team
          </h2>
          <div className={styles.team_persons_container}>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sale_section}>
          <h2 className={styles.section_title}>
            Sale Details
          </h2>
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
        </section>




        <section className={styles.partners_section}>
          <div className={styles.partners_block}>
            <div className={styles.partners_item}>
              <div className={styles.partners_logo}>
                <Image 
                  src="/images/image195.png"
                  height={64}
                  width={64}
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
                  height={64}
                  width={64}
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
                  height={64}
                  width={64}
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
                  height={64}
                  width={64}
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
                  height={64}
                  width={64}
                  alt="Partners icon"
                />
              </div>
              <div className={styles.partners_name}>
                DATE LOIF
              </div>
            </div>
          </div>
        </section>
        
        
        
        
        
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
