import { useState } from 'react';
import * as React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';
import Goalitem from './components/Goalitem';
import Goalinput from './components/Goalinput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  };

  return (
    <View style={styles.appContainer} >
      <Button 
      title='Add New Goal' 
      color="#5e0acc" 
      onPress={startAddGoalHandler} 
      />
      <Goalinput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <Goalitem 
            text={itemData.item.text} 
            id={itemData.item.id} 
            onDeleteItem={deleteGoalHandler}
            />
          );
        }} 
        keyExtractor={(item, index) => {
          return item.id;
        }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#e3d3e4',
  },
  goalsContainer: {
    flex: 5,
  },

});
