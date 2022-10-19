import React, { Component } from "react"
import Image from 'next/image'
import { Buy_Button_2 } from '../buttons/buttons'
import styles from './GameSection.module.css'

export default class GameSection extends Component {
  render() {
    return (
      <section className={styles.p2egame_section}>
        <a id={"P2Egame"} name={"P2Egame"}></a>
        <h2 className={styles.section_title}>
          P2E Game
        </h2>
        <div className={styles.p2egame_section_content}>
          <div className={styles.p2egame_text_block}>
            <h3 className={styles.p2egame_text_title}>
              New dynamic P2E game!<br/>
              Be the winner among the rest!
            </h3>
            <div className={styles.p2egame_image_block_mobile}>
              <Image 
                src="/images/P2Egame.svg"
                width={579}
                height={579}
                alt="P2E game illustration"
              />
            </div>
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
            <Buy_Button_2 />
          </div>
          <div className={styles.p2egame_image_block}>
            <Image 
              src="/images/P2Egame.svg"
              width={579}
              height={579}
              alt="P2E game illustration"
            />
          </div>
        </div>
      </section>
    );
  }
}