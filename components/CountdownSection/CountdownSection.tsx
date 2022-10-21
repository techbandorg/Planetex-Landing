import React, {useEffect, useState} from "react"
import Image from 'next/image'
import styles from './CountdownSection.module.css'
import {getFormattedRoundAmounts, getRoundEndTime, getRoundInfo} from '../../constants/utils';

function CountdownSection() {
  const [countdownTime, setCountdownTime] = useState(0)

  useEffect(() => {
    getRoundEndTime().then(res => setCountdownTime(+res))
    getFormattedRoundAmounts()
  }, []);


  return (
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
            <div className={styles.win_countdown_progress_initial_caption}>
              Initial sales amount:
            </div>
            <div className={styles.win_countdown_progress_initial_amount}>
              0,04$ per token
            </div>
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
  );
}

export default CountdownSection