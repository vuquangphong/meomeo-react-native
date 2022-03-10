import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.itemSquare} />
                <Text style={styles.itemText}>{props.text}</Text>
            </View>

            <View style={styles.itemCircular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    itemSquare: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.5,
        borderRadius: 5,
        marginRight: 11,
    },

    itemText: {
        maxWidth: '80%',
    },

    itemCircular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth:2,
        borderRadius: 5,
    },
});

export default Task;