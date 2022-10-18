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
import TeamSection from '../components/TeamSection/TeamSection'
import SaleSection from '../components/SaleSection/SaleSection'
import PartnersSection from '../components/PartnersSection/PartnersSection'
import Footer from '../components/Footer/Footer'

const Home: NextPage = () => {
  return (
    <div className={styles.landing_wrapper}>
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
          {/* <SaleSection />
          <PartnersSection /> */}
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default Home
