import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/app.component';





/** @type {string} */
let hoge = 1230;



/**
 * @param {number} number 
 */
var fuga = function(number) {
  console.log(number);
};





fuga('test');










/**
 * エントリポイント
 */

ReactDOM.render(<App/>, document.getElementById('app'));
