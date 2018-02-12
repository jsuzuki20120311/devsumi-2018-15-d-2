import  * as $ from 'jquery';
import { Employee } from './models/employee';

$(document).ready(function() {

  /** @type {JQueryXHR} */
  const xcod
  jqXHR = $.ajax({ method: 'get', url: '/api/v1/hoge.jsop' });

  /** @type {number} */
  let test = 1;
  test = "hoge";

  /** @type {Array.<string>} */
  const a = ["test", "test"];

  /** @type {Employee} */
  const employee = { id: "", name: "", sectionId: 0 };

  /** @type {{ name: string, value: number }} */
  const obj = { name: "test", value: 100 };

});
