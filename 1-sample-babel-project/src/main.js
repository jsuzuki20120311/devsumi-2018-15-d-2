// EcamScript2015の import 構文を使用して他のJavaScriptファイルを読み込む
import { HelloWorldModule } from './modules/hello-world-module';

// importしたクラスからインスタンスを生成
const helloWorldModule = new HelloWorldModule();
helloWorldModule.echo();
