import { combineReducers } from 'redux'
import homeScreenReducer from './HomeScreenReducer'
import chordsPage from './ChordsPageReducer'

const Index = combineReducers({
    homeScreen: homeScreenReducer,
    chordsPage
});

export default Index