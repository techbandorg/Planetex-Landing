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
                Trading on Planetex is quite ssigning up for a Planetex accounchance 
                of winning your open contracts. We provided with you all the tools 
                you need.
              </div>
              <div className={styles.win_countdown_progress_bar}>
                <div className={styles.win_countdown_progress_external}>
                  <div className={styles.win_countdown_progress_internal}>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.benefits_section}>
          <div className={styles.benefits_container}>
            <h2 className={styles.benefits_title}>
              Project benefits
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
            <h2 className={styles.benefits_title}>
              Product Suite
            </h2>
            <div className={styles.product_content}>
              <div className={styles.product_left_content}>
                <p className={styles.product_left_text}>
                  Echoing Astar Network's vision to be the heart of the multi-chain 
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
                    <img src="/images/swap.png" alt="Swap icon" />
                  </div>
                  <p className={styles.product_right_caption}>Swap</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <img src="/images/staking.png" alt="Staking icon" />
                  </div>
                  <p className={styles.product_right_caption}>Staking</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <img src="/images/trading.png" alt="Trading icon" />
                  </div>
                  <p className={styles.product_right_caption}>Trading</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <img src="/images/launchpad.png" alt="Launchpad icon" />
                  </div>
                  <p className={styles.product_right_caption}>Launchpad</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <img src="/images/swap.png" alt="Swap icon" />
                  </div>
                  <p className={styles.product_right_caption}>Swap</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <img src="/images/staking.png" alt="Staking icon" />
                  </div>
                  <p className={styles.product_right_caption}>Staking</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <img src="/images/trading.png" alt="Trading icon" />
                  </div>
                  <p className={styles.product_right_caption}>Trading</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <img src="/images/launchpad.png" alt="Launchpad icon" />
                  </div>
                  <p className={styles.product_right_caption}>Launchpad</p>
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
