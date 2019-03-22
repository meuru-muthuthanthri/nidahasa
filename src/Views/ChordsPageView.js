import React from 'react';
import { ScrollView, Text, StyleSheet, Button, View, Picker } from 'react-native';
import _  from 'lodash';
import { CHORDS } from '../Constants';
import CommonManager from '../logic/CommonManager';

const pickerItems = _.map(CHORDS, (key, label) => {
    return <Picker.Item label={label} value={key} key={key}/>;
});

const ChordsPageView = ({ navigation, song, chord, onTransposeSong }) => {
    const lines = CommonManager.splitLyrics(song);
    let songLyrics = _.map(lines,
            lineObj => lineObj.type === 'chord'
                ? <Text style={styles.body2}>{_.get(lineObj, 'line', '')}</Text>
                : <Text style={styles.body}>{_.get(lineObj, 'line', '')}</Text>
    );
    return (
        <View>
            <Picker
                style={{height: 50, width: 120}}
                mode={'dropdown'}
                selectedValue = {chord}
                onValueChange={(itemValue, itemIndex) => {
                    onTransposeSong(itemValue);
                }}>
                {pickerItems}
            </Picker>
            <ScrollView style={styles.contentContainer}>
                {songLyrics}
            </ScrollView>
        </View>
    );
};

ChordsPageView.navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('title', 'No Title'),
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
};

export default ChordsPageView;

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 10,
        paddingStart: 10,
        paddingEnd: 10,
        backgroundColor: '#000000'
    },
    body: {
        color: '#ffffff',
        fontFamily: 'Impact',
        fontSize: 12
    },
    body2: {
        color: '#ffffff',
        fontFamily: 'Impact',
        fontSize: 16.25
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
});
