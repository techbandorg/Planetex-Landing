import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import FirstSection from '../components/FirstSection/FirstSection'
import CountdownSection from '../components/CountdownSection/CountdownSection'
import BenefitsSection from '../components/BenefitsSection/BenefitsSection'
import ProductSection from '../components/ProductSection/ProductSection'
import GameSection from '../components/GameSection/GameSection'
import RoadmapSection from '../components/RoadmapSection/RoadmapSection'
import TokenomicsSection from '../components/TokenomicsSection/TokenomicsSection'
import TeamSection from '../components/TeamSection/TeamSection'
import SaleSection from '../components/SaleSection/SaleSection'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Planetex</title>
        <meta name="description" content="Planetex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <FirstSection />
        <CountdownSection />
        <BenefitsSection />
        <ProductSection />
        <GameSection />
        <RoadmapSection />
        <TokenomicsSection />
        <TeamSection />
        <SaleSection />


        <section className={styles.partners_section}>
          <h2 className={styles.partners_title}>
            Partners
          </h2>
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
      </main>

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
    </div>
  )
}

export default Home
