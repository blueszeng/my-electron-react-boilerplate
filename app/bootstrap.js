/* global document */
'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import MainFrame from './components/MainFrame';

ReactDom.render(React.createElement(MainFrame), document.getElementById('main-frame'));
