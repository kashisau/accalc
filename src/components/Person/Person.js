import React from 'react';

export default class Person extends React.Component {
  constructor(props) {
    super(props);
  }

  currency = value => {
    const valParsed = Number.parseFloat(value);
    console.log('Value parsed', value);
    if (isNaN(valParsed)) return;
    return valParsed.toFixed(2);
  };

  render() {
    const { days, name, chargeRatio, charges, total } = this.props;
    const currency = this.currency;
    return (
      <li>
        <table>
          <thead>
            <tr>
              <td colSpan="2">{name}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nights</td>
              <td>{days}</td>
            </tr>
            <tr>
              <td>Service &amp; cleaning</td>
              <td>{currency(charges)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{currency(total)}</td>
            </tr>
          </tfoot>
        </table>
      </li>
    );
  }
}
