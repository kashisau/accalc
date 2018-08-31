import React, { Fragment } from 'react';
import CostInput from './../CostInput/CostInput';
import styles from './cost-form.css';

export default class CostForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      updateNightlyRate,
      updateCleaningFee,
      updateServiceFee
    } = this.props;

    return (
      <div className={styles.costForm}>
        <CostInput onUpdate={updateNightlyRate} label="Nightly rate" />
        <CostInput onUpdate={updateCleaningFee} label="Cleaning fee" />
        <CostInput onUpdate={updateServiceFee} label="Service fee" />
      </div>
    );
  }
}
