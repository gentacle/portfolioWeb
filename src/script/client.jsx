import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import MainPage from './mainPage';

const Hot = hot(MainPage);

ReactDOM.render(<Hot />, document.querySelector('#root'));