import { useState } from 'react';
import * as React from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
} from 'react-native';

function Goalinput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your Course Goal!"
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button
                title="Add Goal"
                onPress={addGoalHandler}
            />
        </View>
    );
};

export default Goalinput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',

    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        marginRight: 8,
        padding: 8,
    },
})