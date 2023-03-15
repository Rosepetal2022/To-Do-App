import { useState } from 'react';
import * as React from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal,
    Image
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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/bullseye.png')}/>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your Course Goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#5e0acc" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default Goalinput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#324376',
        padding: 16,

    },
    image: {
        width: 100,
        height: 100,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#324376',
        backgroundColor: 'white',
        width: '100%',
        padding: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }
})