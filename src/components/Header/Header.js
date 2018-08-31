import React from 'react';
import styles from './header.css';

export default class Header extends React.Component {
  render() {
    const { participants, cost } = this.props;

    return (
      <header className={styles.header}>
        <div className={styles.people}>
          <select className={styles.peopleSelect}>
            {participants.map((p, i) => (
              <option key={i}>{p.name}</option>
            ))}
          </select>
        </div>
        <div className={styles.cost}>
          <span className={styles.currency}>$</span>
          <span className={styles.amount}>{this.props.cost}</span>
        </div>
      </header>
    );
  }
}
