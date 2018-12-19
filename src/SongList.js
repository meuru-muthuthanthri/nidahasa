import { connect } from 'react-redux';
import SongListViewWrapper from './Views/SongListViewWrapper';
import { Actions } from './Actions'

const mapStateToProps = state => {
    return {
        songs: state.homeScreen.get('filteredSongs'),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectSong: (song) => { dispatch(Actions.homeScreen.selectSong(song)); },
        onSearchTextChange: (data) => { dispatch(Actions.homeScreen.searchSong(data))},
    }
};

const SongList = connect(
    mapStateToProps,
    mapDispatchToProps
)(SongListViewWrapper);

export default SongList;