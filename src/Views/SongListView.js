import React from 'react';
import {FlatList, TouchableOpacity, View, Text, StyleSheet} from 'react-native';

class SongLineItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id, this.props.data);
    };

    render() {
        const textColor = this.props.selected ? "red" : "black";
        return (
            <TouchableOpacity
                onPress={this._onPress}
                style = { styles.songLineItemRow }>
                <View style = { styles.songLineItem }>
                    <Text style = { styles.songLineItemIndex }>
                        { this.props.index + 1 }</Text>
                    <Text style={ styles.songLineItemTitle }>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class SongListView extends React.PureComponent {
    state = {selected: new Map() };


_keyExtractor = (item, index) => item.key;

_onPressItem = (id, data) => {
    const { navigate } = this.props;
    this.setState((state) => {
        const selected = new Map(state.selected);
        selected.set(id, !selected.get(id)); // toggle
        return {selected};
    });
    this.props.onSelectSong(data);
    navigate('ChordsPage', data);
};

_renderItem = ({ item, index }) => (
    <SongLineItem
        id={item.key}
        onPressItem={this._onPressItem}
        selected={!!this.state.selected.get(item.key)}
        title={item.title}
        data = {item}
        index = { index }
    />
);

    render() {
        return (
            <FlatList
                data={this.props.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                style = { styles.songList }
            />
        );
    }
}

const styles = StyleSheet.create({
    songList: { alignSelf: 'stretch'},
    songLineItem: {
        flexDirection: 'row',
        backgroundColor: '#F4A261',
        padding:2,

    },
    songLineItemRow: {
        padding: 2,
    },
    songLineItemIndex: {
        width: 20,
        textAlign: 'center',
        backgroundColor: '#E9C46A',
        color: '#264653',
        fontWeight: 'bold'
    },
    songLineItemTitle: {
        paddingStart: 5,
        color: '#264653',
        fontWeight: 'bold'
    }
});

export default SongListView