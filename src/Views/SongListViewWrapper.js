import React from 'react';
import { StyleSheet } from 'react-native';
import SongListView from './SongListView';


const SongListViewWrapper  = ({ navigation, songs, navigate,
                                  onSelectSong }) => {
    return (
        <SongListView
            data={songs}
            navigate = {navigate}
            onSelectSong = {onSelectSong}
        />
    );
};

export default SongListViewWrapper;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    textfield: {
        width: 200,
        height: 48,
        marginStart: 10,
        marginBottom: 5,
    }
});