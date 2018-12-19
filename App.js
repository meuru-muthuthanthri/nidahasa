import React from 'react';
import ChordsPage from './src/ChordsPage';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
    createStackNavigator,
} from 'react-navigation';
import reducer from './src/Reducers'
import HomeScreen from "./src/HomeScreen";
import { Actions } from './src/Actions'

const store = createStore(reducer);

const Navigator = createStackNavigator({
    Home: { screen: HomeScreen },
    ChordsPage: { screen: ChordsPage },
});

export default class App extends React.Component {
    render() {

        store.dispatch(Actions.global.appStart());

        return (
            <Provider store={store}>
                <Navigator/>
            </Provider>
        );
    }
}


