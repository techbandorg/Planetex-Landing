import React, {useEffect, useState} from "react"
import Image from 'next/image'
import styles from './CountdownSection.module.css'
import {getFormattedRoundAmounts, getRoundEndTime} from '../../constants/utils';
import useTimer from '../../hooks/useTimer';


function CountdownSection() {
  const [roundAmounts, setRoundAmounts] = useState('')
  const [roundEndTimestamp, setRoundEndTimestamp] = useState(0)
  // @ts-ignore
  const { days, hours, minutes, seconds } = useTimer(roundEndTimestamp)

  useEffect(() => {
    // @ts-ignore
    getFormattedRoundAmounts().then(res => setRoundAmounts(res))
    // @ts-ignore
    getRoundEndTime().then(res => setRoundEndTimestamp((new Date(+res * 1000).toISOString()).slice(0, 19)))
  }, []);

  return (
    <section className={styles.win_countdown_section}>
      <div className={styles.win_countdown_timer_block}>
        <div className={styles.win_countdown_timer_item}>
          <div className={styles.win_countdown_timer_cell} suppressHydrationWarning>{days}</div>
          <div className={styles.win_countdown_timer_caption}>Days</div>
        </div>
        <div className={styles.win_countdown_timer_item}>
          <div className={styles.win_countdown_timer_cell} suppressHydrationWarning>{hours}</div>
          <div className={styles.win_countdown_timer_caption}>Hours</div>
        </div>
        <div className={styles.win_countdown_timer_item}>
          <div className={styles.win_countdown_timer_cell} suppressHydrationWarning>{minutes}</div>
          <div className={styles.win_countdown_timer_caption}>Minutes</div>
        </div>
        <div className={styles.win_countdown_timer_item}>
          <div className={styles.win_countdown_timer_cell} suppressHydrationWarning>{seconds}</div>
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
            {/*@ts-ignore*/}
            <progress className={styles.amount_progress} value={roundAmounts?.totalSold > 1000000 ? roundAmounts?.totalSold : roundAmounts?.totalSold + 500000} max={roundAmounts?.totalAmount}/>
          </div>

          <div className={styles.win_countdown_progress_range}>
            <div className={styles.win_countdown_progress_range_left}>
              {/*@ts-ignore*/}
              <div>{(roundAmounts?.totalSold)?.toLocaleString()}</div>
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
              {/*@ts-ignore*/}
              <div>{(roundAmounts?.totalAmount)?.toLocaleString()}</div>
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