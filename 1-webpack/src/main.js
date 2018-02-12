import $ from 'jquery';
import { Hoge } from './modules/hoge';

$(document).ready(function() {

    const hoge = new Hoge();
 
    $('#button').click(function() {
        hoge.run();
    });
});
