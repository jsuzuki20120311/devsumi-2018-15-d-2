import $ from 'jquery';
import { HelloWorldModule } from './modules/hello-world-module';

$(document).ready(function() {
    $('#button').click(function() {
        const helloWorldModule = new HelloWorldModule();
        helloWorldModule.echo();
    });
});
