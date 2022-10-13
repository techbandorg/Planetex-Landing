import React, { Component } from "react"
import styles from './TeamSection.module.css'
import TeamSlider from '../TeamSlider/TeamSlider'

export default class TeamSection extends Component {
  render() {
    return (
      <section className={styles.team_section}>
        <h2 className={styles.section_title}>
          The Team
        </h2>
        <div className={styles.team_persons_container}>
          <div className={styles.team_person}>
            <div className={styles.team_person_caption}>
              <div className={styles.team_person_name}>
                Dmitriy
              </div>
              <div className={styles.team_person_position}>
                Chief Executive Officer
              </div>
            </div>
          </div>
          <div className={styles.team_person}>
            <div className={styles.team_person_caption}>
              <div className={styles.team_person_name}>
                Dmitriy
              </div>
              <div className={styles.team_person_position}>
                Chief Executive Officer
              </div>
            </div>
          </div>
          <div className={styles.team_person}>
            <div className={styles.team_person_caption}>
              <div className={styles.team_person_name}>
                Dmitriy
              </div>
              <div className={styles.team_person_position}>
                Chief Executive Officer
              </div>
            </div>
          </div>
          <div className={styles.team_person}>
            <div className={styles.team_person_caption}>
              <div className={styles.team_person_name}>
                Dmitriy
              </div>
              <div className={styles.team_person_position}>
                Chief Executive Officer
              </div>
            </div>
          </div>
          <div className={styles.team_person}>
            <div className={styles.team_person_caption}>
              <div className={styles.team_person_name}>
                Dmitriy
              </div>
              <div className={styles.team_person_position}>
                Chief Executive Officer
              </div>
            </div>
          </div>
          <div className={styles.team_person}>
            <div className={styles.team_person_caption}>
              <div className={styles.team_person_name}>
                Dmitriy
              </div>
              <div className={styles.team_person_position}>
                Chief Executive Officer
              </div>
            </div>
          </div>
          <div className={styles.team_person}>
            <div className={styles.team_person_caption}>
              <div className={styles.team_person_name}>
                Dmitriy
              </div>
              <div className={styles.team_person_position}>
                Chief Executive Officer
              </div>
            </div>
          </div>
          <div className={styles.team_person}>
            <div className={styles.team_person_caption}>
              <div className={styles.team_person_name}>
                Dmitriy
              </div>
              <div className={styles.team_person_position}>
                Chief Executive Officer
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobile_slider}>
          <TeamSlider />
        </div>
      </section>
    );
  }
}