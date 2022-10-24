import React, { Component } from 'react'
import styles from './buttons.module.css'

export class JoinIDO_1 extends Component {
  render() {
    return (
      <div className={styles.header_join_button_1}>
        Join IDO
      </div>
    );
  }
}

export class JoinIDO_2 extends Component {
  render() {
    return (
      <div className={styles.buy_button_1}>
        Join IDO
      </div>
    );
  }
}

export class Buy_Button_1 extends Component {
  render() {
    return (
      <div className={styles.buy_button_1}>
        Buy Token
      </div>
    );
  }
}

export class Buy_Button_2 extends Component {
  render() {
    return (
      <div className={styles.buy_button_1}>
        Mint NFT
      </div>
    );
  }
}

export class Soon_Button extends Component {
  render() {
    return (
      <div className={styles.soon_button}>
        Soon
      </div>
    );
  }
}