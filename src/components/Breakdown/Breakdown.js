import React from 'react';
import Person from './../Person/Person';
import styles from './breakdown.css';

export const PARTICIPANTS = [
  { name: 'A', days: 3, chargeRatio: 1.25 },
  { name: 'J', days: 3, chargeRatio: 1.25 },
  { name: 'M', days: 3, chargeRatio: 1.25 },
  { name: 'K', days: 3, chargeRatio: 1.25 },
  { name: 'M2', days: 1, chargeRatio: 0 }
];

export default class Breakdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ol className={styles.breakdown}>
        {PARTICIPANTS.map((p, i) => (
          <Person {...p} key={i} />
        ))}
      </ol>
    );
  }
}
