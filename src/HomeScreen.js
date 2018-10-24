import { connect } from 'react-redux';
import HomeScreenView from './Views/HomeScreenView';
import { Actions } from './Actions'

const mapStateToProps = state => {
    return {
        songs: state.homeScreen.get('songs')
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectSong: (song) => { dispatch(Actions.homeScreen.selectSong(song)); }
    }
};

const HomeScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreenView);

export default HomeScreen;