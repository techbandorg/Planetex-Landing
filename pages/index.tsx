import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import FirstSection from '../components/FirstSection/FirstSection'
import CountdownSection from '../components/CountdownSection/CountdownSection'
import BenefitsSection from '../components/BenefitsSection/BenefitsSection'
import ProductSection from '../components/ProductSection/ProductSection'
import GameSection from '../components/GameSection/GameSection'
import RoadmapSection from '../components/RoadmapSection/RoadmapSection'
import TokenomicsSection from '../components/TokenomicsSection/TokenomicsSection'
//import TeamSection from '../components/TeamSection/TeamSection'
import SaleSection from '../components/SaleSection/SaleSection'
//import PartnersSection from '../components/PartnersSection/PartnersSection'
import Footer from '../components/Footer/Footer'

const Home: NextPage = () => {
  return (
    <div className={styles.landing_wrapper}>
      <div className={styles.container}>
        <Head>
          <meta charSet="UTF-8" key="1"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" key="2"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" key="3"/>
          <meta name="description" content="Planetex app" key="4"/>
          <title>Planetex | Buy PLTEX Token & NFT</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
        <main className={styles.main}>
          <FirstSection />
        </main>
      </div>
          <CountdownSection />
      <div className={styles.container}>
        <main className={styles.main}>
          <BenefitsSection />
          <ProductSection />
          <GameSection />
          <RoadmapSection />
          <TokenomicsSection />
          {/* <TeamSection /> */}
          <SaleSection />
          {/* <PartnersSection /> */}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home
