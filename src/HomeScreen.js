import { connect } from 'react-redux';
import _ from 'lodash'
import HomeScreenView from './Views/HomeScreenView';
import { Actions } from './Actions'

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectSong: (song) => { dispatch(Actions.homeScreen.selectSong(song)); },
        onSearchTextChange: (data) => { dispatch(Actions.homeScreen.searchSong(_.toLower(data)))},
        onSearchTextClear: () => { dispatch(Actions.homeScreen.clearSearch())},
    }
};

const HomeScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreenView);

export default HomeScreen;
