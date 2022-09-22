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
        
        
        
        
        
        <h1 className={styles.title}>
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
        </div>
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
