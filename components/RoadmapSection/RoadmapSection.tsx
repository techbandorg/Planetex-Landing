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
    "first" : "/images/quarter1IMG.svg",
    "second" : "/images/quarter2.svg",
    "third" : "/images/quarter3.svg",
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
          <div className={styles.roadmap_text_subtitle}>
            NFT
          </div>
          <div className={styles.roadmap_text}>
            <p>
            Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
            future, Starfish aims Echoing Astar Network&apos;s vision to be the 
            heart of the multi-chain future, Starfish aims Echoing Astar 
            Network&apos;s vision to be the heart of the Starfish aims Echoing 
            Astar Network&apos;s vision to be the heart of the multi-chain future, 
            Starfish aims Echoing Astar Network&apos;s vision to be the heart of 
            the multi-chain future, Starfish aimsing Astar Network&apos;s vision 
            to be the heart of the multi-chain future, Starfish aims 
            </p>
          </div>
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
              Quarter 1 2023
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
              Quarter 2 2023
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