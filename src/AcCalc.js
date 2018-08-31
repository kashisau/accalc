import React, { Component } from 'react';
import Header from './components/Header/Header';
import CostForm from './components/CostForm/CostForm';
import Breakdown, { PARTICIPANTS } from './components/Breakdown/Breakdown';
import styles from './ac-calc.css';

class AcCalc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      participants: PARTICIPANTS,
      nightlyRate: 0,
      cleaningFee: 0,
      serviceFee: 0
    };
  }

  updateNightlyRate = nightlyRate => {
    this.setState({ nightlyRate: nightlyRate }, this.updateCost);
  };
  updateCleaningFee = cleaningFee => {
    this.setState({ cleaningFee: cleaningFee }, this.updateCost);
  };
  updateServiceFee = serviceFee => {
    this.setState({ serviceFee: serviceFee }, this.updateCost);
  };

  updateCost = cost => {
    const { nightlyRate, cleaningFee, serviceFee, participants } = this.state;
    const charges = serviceFee + cleaningFee;
    const totalParticipants = participants.length;
    const maxDays = participants.reduce((max, p) => {
      if (p.days > max) return p.days;
      return max;
    }, 0);

    const slots = maxDays * totalParticipants;

    if (!nightlyRate || !cleaningFee || !serviceFee) return;

    // Reset the totals
    participants.forEach(p => {
      const charges = (charges / totalParticipants) * p.chargeRatio;
      p.charges = charges;
      p.total = charges;
    });

    // Nightly rates
    for (var i = 0; i < maxDays; i++) {
      let remainingParticipants = participants.filter(p => p.days > i);
      let costPerParticipant = nightlyRate / remainingParticipants.length;
      remainingParticipants.forEach(p => {
        p.total += costPerParticipant;
      });
    }

    this.setState({ participants: participants });
  };

  render() {
    return (
      <div className={styles.acCalc}>
        <Header {...this.state} />
        <CostForm
          updateNightlyRate={this.updateNightlyRate}
          updateCleaningFee={this.updateCleaningFee}
          updateServiceFee={this.updateServiceFee}
        />
        <Breakdown {...this.state} />
      </div>
    );
  }
}

export default AcCalc;
