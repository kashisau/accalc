import React, { Fragment } from 'react';
import styles from './cost-input.css';

export default class CostInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  qualifyChange = changeEvent => {
    const newValue = changeEvent.target.value;
    const cost = parseFloat(newValue);

    if (isNaN(cost)) return;
    if (cost < 0) return;

    this.setState({ value: cost });
    this.props.onUpdate(cost);
  };

  render() {
    return (
      <label className={styles.costLabel}>
        <span className={styles.costLabelText}>{this.props.label}</span>
        <input
          className={styles.input}
          type="number"
          placeholder="0.00"
          min="0.00"
          max="1000.00"
          step="0.01"
          onChange={this.qualifyChange}
        />
      </label>
    );
  }
}
