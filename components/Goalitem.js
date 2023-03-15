import * as React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';

function Goalitem(props) {
    return (

        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '##dddddd' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
                >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

export default Goalitem;

const styles = StyleSheet.create({
    goalItem: {
        marginTop: 20,
        borderRadius: 6,
        backgroundColor: '#b180f0'
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
});