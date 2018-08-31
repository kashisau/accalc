import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AcCalc from './AcCalc';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AcCalc />, document.getElementById('root'));
registerServiceWorker();
