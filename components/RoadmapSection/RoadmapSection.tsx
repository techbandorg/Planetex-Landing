import React, { Component } from "react"
import Image from 'next/image'
import styles from './RoadmapSection.module.css'
import RoadmapSlider from '../RoadmapSlider/RoadmapSlider'

export default class RoadmapSection extends Component {
  render() {
    return (
      <section className={styles.roadmap_section}>
        <a id={"roadmap"} name={"roadmap"}></a>
        <h2 className={`${styles.section_title} ${styles.roadmap_title}`}>
          Roadmap
        </h2>
        <div className={styles.roadmap_content}>
          <div className={styles.roadmap_img_block}>
            <div className={styles.roadmap_image}>
              <Image 
                src="/images/quarter1IMG.svg"
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
              Network&apos;s vision to be the heart of the, Starfish aims Echoing 
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
    );
  }
}