import homeScreen from './HomeScreenActions'
import chordsPage from './ChordsPageActions'

const createAction = (type) => {
    return (payload) => ({ type, payload})
};

const globalEvents = {
    'APP_START': 'APP_START'
};

const globalActions = {
    appStart: createAction(globalEvents.APP_START)
};

export const Actions = {
    global: globalActions,
    homeScreen: homeScreen.Actions,
    chordsPage: chordsPage.Actions
};

export const Events = {
    global: globalEvents,
    homeScreen: homeScreen.Events,
    chordsPage: chordsPage.Events
};
