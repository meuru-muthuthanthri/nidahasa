import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SongList from '../SongList';

import { MKTextField, MKColor, MKButton }from 'react-native-material-kit';

const HomeScreenView  = ({ navigation, songs,
                             onSelectSong, onSearchTextChange, onSearchTextClear }) => {
    const { navigate } = navigation;
    const CustomTextfield = new MKTextField.textfieldWithFloatingLabel()
        .withPlaceholder("Search")
        .withStyle(styles.textfield)
        .withTintColor(MKColor.Lime)
        .withTextInputStyle({color: MKColor.Orange})
        .withOnChangeText(onSearchTextChange)
        .build();

    const ColoredFab = MKButton.coloredFab()
        .withStyle(styles.clearButton)
        .withBackgroundColor(MKColor.Amber)
        .withText('X')
        .withTextStyle(styles.clearButtonText)
        .withOnPress(() => {
            // console.log(this.refs.input.refs.input);

            onSearchTextClear();
        })
        .build();

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <CustomTextfield text='input'/>
                <ColoredFab></ColoredFab>
            </View>
            <SongList navigate = {navigate}/>
        </View>
    );
};

HomeScreenView.navigationOptions = {
    title: 'Nidahasa App',
};

export default HomeScreenView;


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
    },
    clearButton: {
        width: 30,
        height: 30,
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    clearButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    }
});