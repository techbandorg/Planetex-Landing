import React, { useState } from "react"
import Image from 'next/image'
import styles from './RoadmapSection.module.css'
import RoadmapSlider from '../RoadmapSlider/RoadmapSlider'

export default function RoadmapSection () {
  const [currentQuarter, setCurrentQuarter] = useState("first");

  type ImgAdr = { 
    [key: string]: string
  };

  const imagesObj: ImgAdr = {
    "first" : "/images/quarter1IMG.png",
    "second" : "/images/quarter2.svg",
    "third" : "/images/quarter3.png",
    "fourth" : "/images/quarter4.svg"
  }

  function quarterHandler(event: React.MouseEvent): void {
    const target = event.target as HTMLButtonElement;
    console.log(target.dataset.name);
    if (target.dataset.name) {
      setCurrentQuarter(target.dataset.name);
    }
  }

  return (
    <section className={styles.roadmap_section}>
      <h2 className={`${styles.section_title} ${styles.roadmap_title}`}>
        Roadmap<a id={"roadmap"}></a>
      </h2>
      <div className={styles.roadmap_content}>
        <div className={styles.roadmap_img_block}>
          <div className={styles.roadmap_image}>
            <Image 
              src={`${imagesObj[currentQuarter]}`}
              width={669}
              height={784}
              alt="P2E game illustration"
            />
          </div>
        </div>
        <div className={styles.roadmap_text_block}>
          {currentQuarter === "first" 
          ? 
          <>
            <div className={styles.roadmap_text_subtitle}>
              Token & NFT
            </div>
            <div className={styles.roadmap_text}>
              <p>
              In the fourth quarter of 2022, we plan to launch IDO to raise 
              funds that will allow us to improve and expand our decentralized 
              platform development. The Planetex token will be used in many 
              products of our platform and will be a good investment tool. 
              We are also releasing a series of NFT characters that will give 
              you the opportunity to participate in our future game.
              </p>
            </div>
          </>
          :
          currentQuarter === "second"
          ?
          <>
            <div className={styles.roadmap_text_subtitle}>
              DEX
            </div>
            <div className={styles.roadmap_text}>
              <p>
              In the first quarter of 2023, we plan to launch our DEX platform 
              and introduce you to many decentralized financial instruments 
              within it. Our team wants to implement their original ideas in 
              such DeFi classics as Swap, Staking, Farms and integrate new 
              products that have not been used in the crypto world before. 
              Many positive surprises are waiting for you!
              </p>
            </div>
          </>
          :
          currentQuarter === "third"
          ?
          <>
            <div className={styles.roadmap_text_subtitle}>
              P2E Game
            </div>
            <div className={styles.roadmap_text}>
              <p>
              In the third quarter of 2023, we plan to launch a game that we 
              believe will generate a lot of positive reactions and interest 
              from P2E gamers. A dynamic royal battle that will not leave 
              indifferent fans of action and drive. Many characters with 
              different skills, original graphics and the opportunity to earn 
              tokens. This will be our signature dish for blockchain devotees!
              </p>
            </div>
          </>
          :
          currentQuarter === "fourth"
          ?
          <>
            <div className={styles.roadmap_text_subtitle}>
              Metaverse
            </div>
            <div className={styles.roadmap_text}>
              <p>
              In the last quarter of 2023, we plan to launch our own Metaverse. 
              A colorful unexplored area that will let you build your own space 
              stations and explore new planets. It will be a new world that you 
              can discover with our project!
              </p>
            </div>
          </>
          :
          null
          }
        </div>
      </div>
      <div className={styles.mobile_slider}>
        <RoadmapSlider />
      </div>
      <div className={styles.roadmap_scale_container}>
        <div className={styles.roadmap_quarters}>
          <div className={styles.roadmap_scale}>
            <div 
              data-name={"first"}
              onClick={quarterHandler} 
              className={styles.roadmap_quarter}
            >
              Quarter 4 2022
            </div>
            <div className={
              `${styles.roadmap_internal} 
              ${currentQuarter === "first" ? 
              styles.roadmap_internal_active : 
              styles.roadmap_internal}`
            }></div>
          </div>
          <div className={styles.roadmap_scale}>
            <div 
              data-name={"second"}
              onClick={quarterHandler} 
              className={styles.roadmap_quarter}
            >
              Quarter 1 2023
            </div>
            <div className={
              `${styles.roadmap_internal} 
              ${currentQuarter === "second" ? 
              styles.roadmap_internal_active : 
              styles.roadmap_internal}`
            }></div>
          </div>
          <div className={styles.roadmap_scale}>
            <div 
              data-name={"third"}
              onClick={quarterHandler} 
              className={styles.roadmap_quarter}
            >
              Quarter 3 2023
            </div>
            <div className={
              `${styles.roadmap_internal} 
              ${currentQuarter === "third" ? 
              styles.roadmap_internal_active : 
              styles.roadmap_internal}`
            }></div>
          </div>
          <div className={styles.roadmap_scale}>
            <div 
              data-name={"fourth"}
              onClick={quarterHandler} 
              className={styles.roadmap_quarter}
            >
              Quarter 4 2023
            </div>
            <div className={
              `${styles.roadmap_internal} 
              ${currentQuarter === "fourth" ? 
              styles.roadmap_internal_active : 
              styles.roadmap_internal}`
            }></div>
          </div>
        </div>
      </div>
    </section>
  );
}