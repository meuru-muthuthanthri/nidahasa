import React from 'react';
import { View, StyleSheet } from 'react-native';
import SongListView from './SongListView';

const HomeScreenView  = ({ navigation, songs, onSelectSong }) => {
    const { navigate } = navigation;
    return (
        <View style={styles.container}>
            <SongListView
                data={songs}
                navigate = {navigate}
                onSelectSong = {onSelectSong}
            />
        </View>
    );
};

HomeScreenView.navigationOptions = {
    title: 'Nidahasa App3',
};

export default HomeScreenView;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
});