import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, AsyncStorage} from 'react-native';
export default (props) => {
    const [value, setValue] = useState('');

    const [showText, setShowText] = useState('');

    const KEY = 'tll';
    const setStorage = () => {
        AsyncStorage.setItem(KEY, value);
    };

    const getStorage = async () => {
        try {
            let data = await AsyncStorage.getItem(KEY);
            setShowText(data);
        } catch (error) {
            setShowText(error.toString());
        }
    };

    return (
        <View style={styles.root}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={setValue}
            />
            <Button
            title="setItem"
            onPress={() => {
                setStorage();
            }} />

            <Button
             title="getItem"
            onPress={() => {
                getStorage();
            }} />

            <Text style={styles.showText}>{showText}</Text>
            <Text style={styles.showText}>{showText}</Text>
            <Text style={styles.showText}>{showText}</Text>
            <Text style={styles.showText}>{showText}</Text>
            <Text style={styles.showText}>{showText}</Text>
            <Text style={styles.showText}>{showText}</Text>
            <Text style={styles.showText}>{showText}</Text>
            <Text style={styles.showText}>{showText}</Text>
            <Text style={styles.showText}>{showText}</Text>
            <Text style={styles.showText}>{showText}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    root: {
        // flex: 1,
    },
    input: {
        width: '100%',
        height: 90,
        borderWidth: 1,
        borderColor: '#333',
    },
    showText: {
        height: 100,
    },
});
