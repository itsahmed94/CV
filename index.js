/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

import HelloWorld from './src/component/Helloworld';
import {name as appName} from './app.json';

import Basic from './src/component/Basic';

AppRegistry.registerComponent(appName, () => Basic);
