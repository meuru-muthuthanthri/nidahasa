import { connect } from 'react-redux';
import ChordsPageView from './Views/ChordsPageView';
import { Actions } from './Actions'

const mapStateToProps = state => {
    return {
        song: state.chordsPage.get('song'),
        chord: state.chordsPage.get('chord'),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTransposeSong: (key) => { dispatch(Actions.chordsPage.transposeSong(key)); }
    }
};

const ChordsPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChordsPageView);

export default ChordsPage;