/** @format */

import 'es6-symbol/implement'
import 'core-js/es6/symbol';
import 'core-js/fn/symbol/iterator';
import "core-js/es6/set";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
