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
            <Button style={styles.goalButton}
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
        paddingRight: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#324376',

    },
    textInput: {
        borderWidth: 1   ,
        borderColor: '#324376',
        backgroundColor: 'white',
        width: '80%',
        marginRight: 8,
        padding: 8,
    },
    goalButton: {
        color: 'black',
        marginRight: 2,
    }
})